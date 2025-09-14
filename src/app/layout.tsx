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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${kanit.variable} font-kanit antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
