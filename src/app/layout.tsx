import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://qisolhealth.com'),
  title: "QiSol | Innovative Hydrogel Film for Chronic Wound Healing",
  description:
    "QiSol develops dissolvable hydrogel film infused with Quercus infectoria extract, accelerating wound healing, reducing infections, and improving patient recovery.",
  keywords: [
    "QiSol",
    "Hydrogel Film",
    "Chronic Wound Healing",
    "Medical Innovation",
    "Electrospinning",
    "Quercus infectoria",
    // Thai keywords for SEO
    "QiSol ฟิล์มไฮโดรเจล",
    "นวัตกรรมรักษาแผล",
    "การรักษาแผลเรื้อรัง",
    "ฟิล์มละลายได้",
    "เทคโนโลยี Electrospinning",
    "ปูดเบญกานี"
  ],
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
  robots: "index, follow",
  alternates: {
    canonical: 'https://qisolhealth.com',
    languages: {
      'th': 'https://qisolhealth.com/th',
      'en': 'https://qisolhealth.com/en',
      'ja': 'https://qisolhealth.com/ja',
    },
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
        {/* Google Analytics - แทนที่ G-XXXXXXXXXX ด้วย Tracking ID จริง */}
        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script> */}
      </head>
      <body
        className={`${kanit.variable} font-kanit antialiased overflow-x-hidden`}
      >
        <div className="min-h-screen overflow-x-hidden">{children}</div>
      </body>
    </html>
  );
}
