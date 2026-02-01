import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://qisolhealth.com'),
  title: {
    default: "QiSol - แผ่นฟิล์มไฮโดรเจลรักษาแผล | นวัตกรรมการแพทย์",
    template: "%s | QiSol Health"
  },
  description:
    "QiSol พัฒนาแผ่นฟิล์มไฮโดรเจลละลายได้ผสานสารสกัดปูดเบญกานี เร่งการรักษาแผล ลดการติดเชื้อ เหมาะสำหรับแผลเบาหวานและแผลกดทับ",
  icons:{
    icon: 'src/app/favicon.ico'
  },
  keywords: [
    "QiSol",
    "ฟิล์มรักษาแผล",
    "ไฮโดรเจล",
    "แผ่นฟิล์มไฮโดรเจล",
    "แผลเบาหวาน",
    "แผลกดทับ",
    "ปูดเบญกานี",
    "นวัตกรรมการแพทย์",
    "การรักษาแผลเรื้อรัง",
    "ฟิล์มละลายได้",
    "เทคโนโลยี Electrospinning",
    "Quercus infectoria",
    "Hydrogel Film",
    "Chronic Wound Healing",
    "Medical Innovation"
  ],
  authors: [{ name: 'QiSol Research Team' }],
  creator: 'QiSol Health',
  publisher: 'QiSol Health',
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://qisolhealth.com',
    languages: {
      'th': 'https://qisolhealth.com/th',
      'en': 'https://qisolhealth.com/en',
      'ja': 'https://qisolhealth.com/ja',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: 'https://qisolhealth.com',
    siteName: 'QiSol Health',
    title: 'QiSol - แผ่นฟิล์มไฮโดรเจลรักษาแผล',
    description: 'นวัตกรรมการรักษาแผลด้วยฟิล์มไฮโดรเจลละลายได้จากสารสกัดปูดเบญกานี',
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
    description: 'นวัตกรรมการรักษาแผลด้วยฟิล์มไฮโดรเจลละลายได้',
    images: ['https://qisolhealth.com/Image/LOGO.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="theme-color" content="#439b83" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" type="image/png" sizes="32x32" href="/Image/LOGO.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/Image/LOGO.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Image/LOGO.png" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E1DP3NB2VK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Default: Deny all tracking until user consents
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'wait_for_update': 500
            });
            
            // Initialize GA4 (will respect consent mode)
            gtag('config', 'G-E1DP3NB2VK', {
              'anonymize_ip': true,
              'allow_google_signals': false,
              'allow_ad_personalization_signals': false
            });
          `}
        </Script>
      </head>
      <body
        className={`${kanit.variable} font-kanit antialiased overflow-x-hidden`}
      >
        <div className="min-h-screen overflow-x-hidden">{children}</div>
      </body>
    </html>
  );
}
