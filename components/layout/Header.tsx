"use client"

import { BRAND } from "@/config/brands";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-borderLight">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-primary">
          {BRAND.name}
        </div>

        {/* CTA */}
        <a
          href={`tel:${BRAND.contact.phone}`}
          className="bg-primary hover:bg-primaryHover text-white px-5 py-2 rounded-lg font-semibold transition"
        >
          Call Now
        </a>
      </div>
    </header>
  );
}
