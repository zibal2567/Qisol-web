import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "QiSol | Innovative Hydrogel Film for Chronic Wound Healing",
  description:
    "QiSol develops dissolvable hydrogel film infused with Pseudobenzoin extract, accelerating wound healing, reducing infections, and improving patient recovery.",
  keywords: [
    "QiSol",
    "Hydrogel Film",
    "Chronic Wound Healing",
    "Medical Innovation",
    "Electrospinning",
    // Thai keywords for SEO
    "QiSol ฟิล์มไฮโดรเจล",
    "นวัตกรรมรักษาแผล",
    "การรักษาแผลเรื้อรัง",
    "ฟิล์มละลายได้",
    "เทคโนโลยี Electrospinning"
  ],
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
  robots: "index, follow",
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
      </head>
      <body
        className={`${kanit.variable} font-kanit antialiased overflow-x-hidden`}
      >
        <div className="min-h-screen overflow-x-hidden">{children}</div>
      </body>
    </html>
  );
}
