"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import PrivacyNavbar from "@/components/PrivacyNavbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, UserCheck, FileText } from "lucide-react";

interface PrivacyProps {
  params: Promise<{ locale: string }>;
}

const localeMap: Record<string, "th-TH" | "en-US" | "ja-JP"> = {
  'th': 'th-TH',
  'en': 'en-US',
  'ja': 'ja-JP'
}

const privacyContent = {
  "th-TH": {
    title: "นโยบายความเป็นส่วนตัว",
    subtitle: "ตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)",
    lastUpdated: "อัปเดตล่าสุด: 8 มกราคม 2026",
    sections: [
      {
        icon: Shield,
        title: "1. ข้อมูลที่เราเก็บรวบรวม",
        content: [
          "ข้อมูลส่วนบุคคล: ชื่อ นามสกุล อีเมล เบอร์โทรศัพท์",
          "ข้อมูลการใช้งาน: IP address, browser type, device information",
          "คุกกี้และเทคโนโลยีติดตาม: Google Analytics, cookies",
          "ข้อมูลการติดต่อ: ข้อความที่ส่งผ่านฟอร์มติดต่อ"
        ]
      },
      {
        icon: Eye,
        title: "2. วัตถุประสงค์การใช้ข้อมูล",
        content: [
          "ปรับปรุงประสบการณ์การใช้งานเว็บไซต์",
          "วิเคราะห์พฤติกรรมผู้ใช้เพื่อพัฒนาบริการ",
          "ติดต่อตอบกลับข้อสอบถาม",
          "ส่งข้อมูลผลิตภัณฑ์และบริการ (หากยินยอม)",
          "ปฏิบัติตามกฎหมายและข้อบังคับที่เกี่ยวข้อง"
        ]
      },
      {
        icon: Lock,
        title: "3. การรักษาความปลอดภัยข้อมูล",
        content: [
          "เข้ารหัสข้อมูลด้วย SSL/TLS",
          "จัดเก็บข้อมูลบนเซิร์ฟเวอร์ที่ปลอดภัย",
          "จำกัดการเข้าถึงข้อมูลเฉพาะผู้มีสิทธิ",
          "ตรวจสอบและปรับปรุงมาตรการความปลอดภัยอย่างสม่ำเสมอ",
          "ไม่เปิดเผยข้อมูลส่วนบุคคลให้บุคคลที่สาม (ยกเว้นกรณีที่กฎหมายกำหนด)"
        ]
      },
      {
        icon: UserCheck,
        title: "4. สิทธิของเจ้าของข้อมูล (ตาม PDPA)",
        content: [
          "สิทธิในการเข้าถึงข้อมูล: ขอดูข้อมูลที่เราเก็บรักษา",
          "สิทธิในการแก้ไข: ขอแก้ไขข้อมูลที่ไม่ถูกต้อง",
          "สิทธิในการลบ: ขอลบข้อมูลส่วนบุคคล",
          "สิทธิในการคัดค้าน: คัดค้านการประมวลผลข้อมูล",
          "สิทธิในการพกพาข้อมูล: ขอรับข้อมูลในรูปแบบอิเล็กทรอนิกส์",
          "สิทธิในการถอนความยินยอม: ยกเลิกความยินยอมได้ทุกเมื่อ"
        ]
      },
      {
        icon: FileText,
        title: "5. คุกกี้ (Cookies)",
        content: [
          "คุกกี้ที่จำเป็น: สำหรับการทำงานพื้นฐานของเว็บไซต์",
          "คุกกี้เพื่อการวิเคราะห์: Google Analytics",
          "คุกกี้เพื่อการตลาด: สำหรับแสดงโฆษณาที่เกี่ยวข้อง (ต้องยินยอม)",
          "คุณสามารถจัดการคุกกี้ได้ผ่านการตั้งค่าบนเว็บไซต์"
        ]
      }
    ],
    footer: "หากมีคำถามเกี่ยวกับนโยบายนี้ กรุณาติดต่อเรา"
  },
  "en-US": {
    title: "Privacy Policy",
    subtitle: "In accordance with Thailand's Personal Data Protection Act 2019 (PDPA)",
    lastUpdated: "Last Updated: January 8, 2026",
    sections: [
      {
        icon: Shield,
        title: "1. Information We Collect",
        content: [
          "Personal Information: Name, email, phone number",
          "Usage Data: IP address, browser type, device information",
          "Cookies and Tracking: Google Analytics, cookies",
          "Contact Information: Messages sent through contact forms"
        ]
      },
      {
        icon: Eye,
        title: "2. Purpose of Data Use",
        content: [
          "Improve website user experience",
          "Analyze user behavior to develop services",
          "Respond to inquiries",
          "Send product and service information (with consent)",
          "Comply with applicable laws and regulations"
        ]
      },
      {
        icon: Lock,
        title: "3. Data Security",
        content: [
          "Data encryption with SSL/TLS",
          "Secure server storage",
          "Limited access to authorized personnel only",
          "Regular security audits and updates",
          "No disclosure to third parties (except as required by law)"
        ]
      },
      {
        icon: UserCheck,
        title: "4. Data Subject Rights (PDPA)",
        content: [
          "Right of Access: View the data we hold",
          "Right to Rectification: Correct inaccurate data",
          "Right to Erasure: Request deletion of personal data",
          "Right to Object: Object to data processing",
          "Right to Data Portability: Receive data in electronic format",
          "Right to Withdraw Consent: Cancel consent at any time"
        ]
      },
      {
        icon: FileText,
        title: "5. Cookies",
        content: [
          "Necessary Cookies: For basic website functionality",
          "Analytics Cookies: Google Analytics (stored for 26 months)",
          "Marketing Cookies: For relevant advertising (requires consent)",
          "You can manage cookies through website settings"
        ]
      }
    ],
    footer: "Please check regularly. If you have questions, please contact us."
  },
  "ja-JP": {
    title: "プライバシーポリシー",
    subtitle: "タイ個人データ保護法2019（PDPA）に準拠",
    lastUpdated: "最終更新日：2026年1月8日",
    sections: [
      {
        icon: Shield,
        title: "1. 収集する情報",
        content: [
          "個人情報：氏名、メールアドレス、電話番号",
          "使用データ：IPアドレス、ブラウザの種類、デバイス情報",
          "Cookieとトラッキング：Google Analytics、Cookie",
          "お問い合わせ情報：お問い合わせフォームで送信されたメッセージ"
        ]
      },
      {
        icon: Eye,
        title: "2. データ使用の目的",
        content: [
          "ウェブサイトのユーザー体験を改善",
          "ユーザー行動を分析してサービスを開発",
          "お問い合わせへの対応",
          "製品・サービス情報の送信（同意を得た場合）",
          "関連する法律および規制の遵守"
        ]
      },
      {
        icon: Lock,
        title: "3. データセキュリティ",
        content: [
          "SSL/TLSによるデータ暗号化",
          "安全なサーバーでの保管",
          "権限のある担当者のみアクセス可能",
          "定期的なセキュリティ監査と更新",
          "第三者への開示なし（法律で義務付けられている場合を除く）"
        ]
      },
      {
        icon: UserCheck,
        title: "4. データ主体の権利（PDPA）",
        content: [
          "アクセス権：保有するデータの閲覧",
          "訂正権：不正確なデータの修正",
          "削除権：個人データの削除要求",
          "異議権：データ処理への異議",
          "データポータビリティ権：電子形式でのデータ受領",
          "同意撤回権：いつでも同意をキャンセル可能"
        ]
      },
      {
        icon: FileText,
        title: "5. Cookie",
        content: [
          "必須Cookie：基本的なウェブサイト機能用",
          "分析Cookie：Google Analytics（26ヶ月間保存）",
          "マーケティングCookie：関連広告用（同意が必要）",
          "ウェブサイト設定でCookieを管理できます"
        ]
      }
    ],
    footer: "定期的にご確認ください。ご質問がある場合は、お問い合わせください。"
  }
};

export default function PrivacyPage({ params }: PrivacyProps) {
  const router = useRouter();
  const resolvedParams = use(params);
  const currentLocale = localeMap[resolvedParams.locale] || 'th-TH';
  const content = privacyContent[currentLocale];

  const handleLanguageChange = (newLocale: "th-TH" | "en-US" | "ja-JP") => {
    const localeUrl = newLocale === "th-TH" ? "th" : newLocale === "en-US" ? "en" : "ja";
    router.push(`/${localeUrl}/privacy`);
  };

  return (
    <>
      <PrivacyNavbar currentLocale={currentLocale} onLanguageChange={handleLanguageChange} />
      
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#439b83] to-[#367268] rounded-2xl mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {content.title}
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              {content.subtitle}
            </p>
            <p className="text-sm text-gray-500">
              {content.lastUpdated}
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {content.sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 p-6 md:p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#439b83]/10 to-[#367268]/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#439b83]" />
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mt-2">
                      {section.title}
                    </h2>
                  </div>
                  <ul className="space-y-3 ml-16">
                    {section.content.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-gray-700 leading-relaxed flex items-start gap-3"
                      >
                        <span className="flex-shrink-0 w-2 h-2 bg-[#439b83] rounded-full mt-2"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Footer Notice */}
          <div className="mt-12 p-6 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl">
            <p className="text-gray-700 text-center leading-relaxed">
              {content.footer}
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
