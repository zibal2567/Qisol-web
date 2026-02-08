import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from '@/i18n/routing';
import { Star } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'reviews.meta' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

interface Testimonial {
  name: string;
  role: string;
  rating: number;
  date: string;
  content: string;
  image: string;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

function ReviewsClient() {
  const t = useTranslations('reviews');
  
  const stats = [
    {
      value: t('stats.satisfaction.value'),
      label: t('stats.satisfaction.label')
    },
    {
      value: t('stats.customers.value'),
      label: t('stats.customers.label')
    },
    {
      value: t('stats.rating.value'),
      label: t('stats.rating.label')
    },
    {
      value: t('stats.reviews.value'),
      label: t('stats.reviews.label')
    }
  ];

  const testimonials: Testimonial[] = t.raw('testimonials');

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-emerald-50/50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#439b83] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gradient-to-b from-white via-emerald-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/80 border border-white/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Rating and Date */}
                <div className="flex justify-between items-start mb-4">
                  <StarRating rating={testimonial.rating} />
                  <span className="text-sm text-gray-500">{testimonial.date}</span>
                </div>

                {/* Review Content */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Reviewer Info */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="backdrop-blur-xl bg-gradient-to-r from-[#439b83]/10 to-emerald-100/50 border border-white/50 rounded-3xl p-12 text-center shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('cta.title')}
            </h2>
            <Link
              href="/contact"
              className="inline-block bg-[#439b83] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#3a8670] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              {t('cta.button')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function ReviewsPage() {
  return <ReviewsClient />;
}
