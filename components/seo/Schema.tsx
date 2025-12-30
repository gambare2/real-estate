import Script from "next/script";

export default function PropertySchema({ listing }: { listing: any }) {
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
      <Script
        id="property-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    );
  }
  