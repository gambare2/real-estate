"use client";

import { BRAND } from "@/config/brands";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary text-white md:hidden">
      <div className="flex">
        <a
          href={`tel:${BRAND.contact.phone}`}
          className="flex-1 text-center py-3 font-semibold"
        >
          Call
        </a>

        <a
          href={`https://wa.me/${BRAND.contact.whatsapp}`}
          className="flex-1 text-center py-3 font-semibold border-l border-white/20"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
