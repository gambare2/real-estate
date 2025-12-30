import { notFound } from "next/navigation";
import SiteHeader from "@/components/layout/Header";
import StickyCTA from "@/components/layout/StickyCTA";
import { getListingBySlug } from "@/lib/listing";
import Script from "next/script";

export default async function PropertyPage({ params }: any) {
  const listing = await getListingBySlug(params.slug);
  if (!listing) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: listing.title,
    address: {
      "@type": "PostalAddress",
      addressLocality: listing.city,
      addressRegion: "Haryana",
      streetAddress: listing.location.address
    },
    offers: {
      "@type": "Offer",
      price: listing.priceFrom,
      priceCurrency: "INR"
    }
  };

  return (
    <>
      {/* SEO SCHEMA */}
      <Script
        id="property-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <SiteHeader />

      {/* HERO */}
      <section className="bg-bgSection py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              {listing.title}
            </h1>
            <p className="text-textMuted mb-4">
              {listing.sector}, {listing.city}
            </p>

            <p className="text-2xl font-semibold text-primary mb-6">
              ₹ {listing.priceFrom.toLocaleString()} Onwards
            </p>

            <button className="bg-primary hover:bg-primaryHover text-white px-6 py-3 rounded-lg font-semibold transition">
              Enquire Now
            </button>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-bgCard border border-borderLight rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">
              Project Overview
            </h2>
            <p className="text-textSecondary">
              {listing.description}
            </p>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="py-12 bg-bgSection">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-semibold mb-6">
            Amenities
          </h2>

          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {listing.amenities.map((item: string) => (
              <li
                key={item}
                className="bg-bgCard border border-borderLight rounded-lg p-4"
              >
                ✔ {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <StickyCTA />
    </>
  );
}
