import { notFound } from 'next/navigation'
import { use } from 'react'
import type { Metadata } from 'next'

const locales = ['th', 'en', 'ja']

// Metadata สำหรับแต่ละภาษา
const metadataByLocale: Record<string, Metadata> = {
  th: {
    title: 'QiSol - แผ่นฟิล์มไฮโดรเจลรักษาแผล | นวัตกรรมการแพทย์',
    description: 'QiSol แผ่นฟิล์มไฮโดรเจลละลายได้ ผสานสารสกัดปูดเบญกานี ลดการติดเชื้อ ฟื้นฟูแผลเร็วขึ้น เหมาะสำหรับแผลเบาหวานและแผลกดทับ',
    keywords: ['ฟิล์มรักษาแผล', 'ไฮโดรเจล', 'ปูดเบญกานี', 'แผลเบาหวาน', 'แผลกดทับ', 'QiSol', 'นวัตกรรมการแพทย์'],
    authors: [{ name: 'QiSol Research Team' }],
    openGraph: {
      title: 'QiSol - แผ่นฟิล์มไฮโดรเจลรักษาแผล',
      description: 'นวัตกรรมการรักษาแผลแห่งอนาคต ด้วยสารสกัดปูดเบญกานี',
      url: 'https://qisolhealth.com/th',
      siteName: 'QiSol Health',
      type: 'website',
      locale: 'th_TH',
      alternateLocale: ['en_US', 'ja_JP'],
      images: [
        {
          url: 'https://qisolhealth.com/Image/LOGO.png',
          width: 1200,
          height: 630,
          alt: 'QiSol - แผ่นฟิล์มไฮโดรเจลรักษาแผล',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'QiSol - แผ่นฟิล์มไฮโดรเจลรักษาแผล',
      description: 'นวัตกรรมการรักษาแผลแห่งอนาคต',
      images: ['https://qisolhealth.com/Image/LOGO.png'],
    },
  },
  en: {
    title: 'QiSol - Hydrogel Wound Healing Film | Medical Innovation',
    description: 'QiSol dissolving hydrogel film infused with Quercus infectoria extract. Reduces infection, accelerates healing. Ideal for diabetic and pressure ulcers.',
    keywords: ['wound healing film', 'hydrogel', 'quercus infectoria', 'diabetic ulcer', 'pressure ulcer', 'QiSol', 'medical innovation'],
    authors: [{ name: 'QiSol Research Team' }],
    openGraph: {
      title: 'QiSol - Hydrogel Wound Healing Film',
      description: 'Advanced wound healing innovation with Quercus infectoria extract',
      url: 'https://qisolhealth.com/en',
      siteName: 'QiSol Health',
      type: 'website',
      locale: 'en_US',
      alternateLocale: ['th_TH', 'ja_JP'],
      images: [
        {
          url: 'https://qisolhealth.com/Image/LOGO.png',
          width: 1200,
          height: 630,
          alt: 'QiSol - Hydrogel Wound Healing Film',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'QiSol - Hydrogel Wound Healing Film',
      description: 'Advanced wound healing innovation',
      images: ['https://qisolhealth.com/Image/LOGO.png'],
    },
  },
  ja: {
    title: 'QiSol - ハイドロゲル創傷治癒フィルム | 医療イノベーション',
    description: 'QiSol 溶解性ハイドロゲルフィルム - マンサク抽出物配合。感染を減少させ、治癒を促進。糖尿病性潰瘍や褥瘡に最適。',
    keywords: ['創傷治癒フィルム', 'ハイドロゲル', 'マンサク', '糖尿病性潰瘍', '褥瘡', 'QiSol', '医療イノベーション'],
    authors: [{ name: 'QiSol Research Team' }],
    openGraph: {
      title: 'QiSol - ハイドロゲル創傷治癒フィルム',
      description: 'マンサク抽出物を使用した先進的な創傷治癒イノベーション',
      url: 'https://qisolhealth.com/ja',
      siteName: 'QiSol Health',
      type: 'website',
      locale: 'ja_JP',
      alternateLocale: ['th_TH', 'en_US'],
      images: [
        {
          url: 'https://qisolhealth.com/Image/LOGO.png',
          width: 1200,
          height: 630,
          alt: 'QiSol - ハイドロゲル創傷治癒フィルム',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'QiSol - ハイドロゲル創傷治癒フィルム',
      description: 'マンサク抽出物を使用した先進的イノベーション',
      images: ['https://qisolhealth.com/Image/LOGO.png'],
    },
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return metadataByLocale[locale] || metadataByLocale.th
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  // Unwrap params using React.use()
  const { locale } = use(params)
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    notFound()
  }

  return children
}
