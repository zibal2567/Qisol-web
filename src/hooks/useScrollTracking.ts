'use client';

import { useEffect, useRef, useCallback } from 'react';
import { trackSectionView, trackScrollDepth } from '@/lib/analytics';

interface UseScrollTrackingProps {
  sectionName: string;
  pagePath: string;
  language: string;
}

/**
 * Hook to track when a section comes into view
 */
export const useSectionTracking = ({
  sectionName,
  pagePath,
  language,
}: UseScrollTrackingProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const hasTracked = useRef(false);

  useEffect(() => {
    const currentSection = sectionRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Track when section is 50% visible and hasn't been tracked yet
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5 && !hasTracked.current) {
            trackSectionView({
              section_name: sectionName,
              page_path: pagePath,
              language: language,
            });
            hasTracked.current = true;
          }
        });
      },
      {
        threshold: [0.5], // Trigger when 50% of section is visible
      }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [sectionName, pagePath, language]);

  return sectionRef;
};

/**
 * Hook to track scroll depth (25%, 50%, 75%, 100%)
 */
export const useScrollDepthTracking = (pagePath: string, language: string) => {
  const scrollTracked = useRef<Set<number>>(new Set());

  const handleScroll = useCallback(() => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollPercentage = Math.round(
      (scrollTop / (documentHeight - windowHeight)) * 100
    );

    // Track at 25%, 50%, 75%, 100%
    const milestones = [25, 50, 75, 100];
    
    milestones.forEach((milestone) => {
      if (scrollPercentage >= milestone && !scrollTracked.current.has(milestone)) {
        trackScrollDepth({
          page_path: pagePath,
          scroll_depth: milestone,
          language: language,
        });
        scrollTracked.current.add(milestone);
      }
    });
  }, [pagePath, language]);

  useEffect(() => {
    // Reset tracked milestones when page changes
    scrollTracked.current.clear();

    // Throttle scroll events
    let timeoutId: NodeJS.Timeout;
    const throttledScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 100);
    };

    window.addEventListener('scroll', throttledScroll);
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [handleScroll]);
};

/**
 * Hook to track time spent on page
 */
export const useTimeTracking = () => {
  const startTime = useRef<number>(Date.now());
  const hasTracked = useRef(false);

  useEffect(() => {
    const trackTime = () => {
      if (!hasTracked.current) {
        const timeSpent = Math.round((Date.now() - startTime.current) / 1000);
        
        // Only track if user spent more than 10 seconds
        if (timeSpent > 10) {
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'time_on_page', {
              value: timeSpent,
              page_path: window.location.pathname,
            });
          }
          hasTracked.current = true;
        }
      }
    };

    // Track when user leaves the page
    window.addEventListener('beforeunload', trackTime);
    
    // Also track after 30 seconds, 60 seconds, 5 minutes
    const timers = [
      setTimeout(() => trackTime(), 30000),  // 30 seconds
      setTimeout(() => trackTime(), 60000),  // 1 minute
      setTimeout(() => trackTime(), 300000), // 5 minutes
    ];

    return () => {
      window.removeEventListener('beforeunload', trackTime);
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);
};
