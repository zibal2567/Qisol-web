"use client";

import { useTranslations } from "next-intl";
import ContactSection from "@/components/ContactSection";

export default function ContactPage() {

    return (
        <main className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-[#439b83] to-white">
            <div className="">
                <ContactSection />
            </div>
        </main>
    );
}
