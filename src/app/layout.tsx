import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "QiSol | นวัตกรรมรักษาแผลเรื้อรัง",
  description: "QiSol - แผ่นฟิล์มไฮโดรเจลละลายได้ ผสานสารสกัดปูดเบญกานี ลดการติดเชื้อ ฟื้นฟูแผลเร็วขึ้น",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="overflow-x-hidden">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body
        className={`${kanit.variable} font-kanit antialiased overflow-x-hidden`}
      >
        <div className="min-h-screen overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
