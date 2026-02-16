// Google Analytics 4 - Custom Events Tracking

// Types for event parameters
interface PageViewParams {
  page_title: string;
  page_location: string;
  page_path: string;
  language: string;
}

interface SectionViewParams {
  section_name: string;
  page_path: string;
  language: string;
  scroll_depth?: number;
}

interface ScrollDepthParams {
  page_path: string;
  scroll_depth: number;
  language: string;
}

interface ButtonClickParams {
  button_name: string;
  button_location: string;
  page_path: string;
  language: string;
}

interface FormSubmitParams {
  form_name: string;
  page_path: string;
  language: string;
}

import { hasAnalyticsConsent } from './cookies';

/**
 * Check if user has consented to analytics
 * Now using cookie-based consent checking
 */
// Consent checking is now imported from cookies.ts

/**
 * Track Page View
 * @param params Page view parameters
 */
export const trackPageView = (params: PageViewParams) => {
  if (!hasAnalyticsConsent()) return; // ✅ เช็ค Consent ก่อน

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: params.page_title,
      page_location: params.page_location,
      page_path: params.page_path,
      language: params.language,
    });
  }
};

/**
 * Track Section View (when user scrolls to a section)
 * @param params Section view parameters
 */
export const trackSectionView = (params: SectionViewParams) => {
  if (!hasAnalyticsConsent()) return; // ✅ เช็ค Consent ก่อน

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'section_view', {
      section_name: params.section_name,
      page_path: params.page_path,
      language: params.language,
      scroll_depth: params.scroll_depth,
    });
  }
};

/**
 * Track Scroll Depth (25%, 50%, 75%, 100%)
 * @param params Scroll depth parameters
 */
export const trackScrollDepth = (params: ScrollDepthParams) => {
  if (!hasAnalyticsConsent()) return; // ✅ เช็ค Consent ก่อน

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'scroll', {
      page_path: params.page_path,
      percent_scrolled: params.scroll_depth,
      language: params.language,
    });
  }
};

/**
 * Track Button Click
 * @param params Button click parameters
 */
export const trackButtonClick = (params: ButtonClickParams) => {
  if (!hasAnalyticsConsent()) return; // ✅ เช็ค Consent ก่อน

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'button_click', {
      button_name: params.button_name,
      button_location: params.button_location,
      page_path: params.page_path,
      language: params.language,
    });
  }
};

/**
 * Track Form Submit
 * @param params Form submit parameters
 */
export const trackFormSubmit = (params: FormSubmitParams) => {
  if (!hasAnalyticsConsent()) return; // ✅ เช็ค Consent ก่อน

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      form_name: params.form_name,
      page_path: params.page_path,
      language: params.language,
    });
  }
};

/**
 * Track Language Change
 * @param from Previous language
 * @param to New language
 */
export const trackLanguageChange = (from: string, to: string) => {
  if (!hasAnalyticsConsent()) return; // ✅ เช็ค Consent ก่อน

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'language_change', {
      from_language: from,
      to_language: to,
      page_path: window.location.pathname,
    });
  }
};

/**
 * Track Outbound Link Click
 * @param url Destination URL
 * @param linkText Link text or name
 */
export const trackOutboundLink = (url: string, linkText: string) => {
  if (!hasAnalyticsConsent()) return; // ✅ เช็ค Consent ก่อน

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'outbound',
      event_label: url,
      link_text: linkText,
      transport_type: 'beacon',
    });
  }
};

/**
 * Track File Download
 * @param fileName Name of the downloaded file
 * @param fileType Type of file (pdf, docx, etc.)
 */
export const trackFileDownload = (fileName: string, fileType: string) => {
  if (!hasAnalyticsConsent()) return; // ✅ เช็ค Consent ก่อน

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'file_download', {
      file_name: fileName,
      file_extension: fileType,
      page_path: window.location.pathname,
    });
  }
};

/**
 * Track Video Play
 * @param videoName Name of the video
 * @param videoUrl URL of the video
 */
export const trackVideoPlay = (videoName: string, videoUrl: string) => {
  if (!hasAnalyticsConsent()) return; // ✅ เช็ค Consent ก่อน

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'video_start', {
      video_title: videoName,
      video_url: videoUrl,
      page_path: window.location.pathname,
    });
  }
};

/**
 * Track Search
 * @param searchTerm Search query
 */
export const trackSearch = (searchTerm: string) => {
  if (!hasAnalyticsConsent()) return; // ✅ เช็ค Consent ก่อน

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'search', {
      search_term: searchTerm,
      page_path: window.location.pathname,
    });
  }
};

/**
 * Track Time on Page
 * @param timeInSeconds Time spent on page in seconds
 */
export const trackTimeOnPage = (timeInSeconds: number) => {
  if (!hasAnalyticsConsent()) return; // ✅ เช็ค Consent ก่อน

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'time_on_page', {
      value: timeInSeconds,
      page_path: window.location.pathname,
    });
  }
};
