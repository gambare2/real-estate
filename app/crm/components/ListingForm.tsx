"use client";

import { useState, useEffect } from "react";
import { generateSlug } from "@/lib/slug";
import { generateSeo } from "@/lib/seo";
import { createListing } from "@/lib/listing";

export default function ListingForm() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [city, setCity] = useState("");
  const [sector, setSector] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceFrom, setPriceFrom] = useState<number | undefined>();
  const [seo, setSeo] = useState<any>({});

  // Auto-generate slug
  useEffect(() => {
    setSlug(generateSlug(title));
  }, [title]);

  // Auto-generate SEO
  useEffect(() => {
    const seoData = generateSeo({
      title,
      city,
      sector,
      propertyType,
      priceFrom
    });
    setSeo(seoData);
  }, [title, city, sector, propertyType, priceFrom]);

  async function handleSubmit(e: any) {
    e.preventDefault();

    await createListing({
      title,
      slug,
      city,
      sector,
      propertyType,
      priceFrom: priceFrom || 0,
      area: "",
      description: "",
      amenities: [],
      images: [],
      location: { lat: 0, lng: 0, address: "" },
      seo,
      brandId: "default"
    });

    alert("Listing created successfully");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl bg-bgCard border border-borderLight rounded-xl p-6 space-y-6"
    >
      <h1 className="text-2xl font-semibold">Create Listing</h1>

      {/* TITLE */}
      <input
        className="w-full border border-borderLight rounded-lg p-3"
        placeholder="Project Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />

      {/* SLUG */}
      <div>
        <label className="text-sm text-textMuted">SEO URL</label>
        <p className="text-primary font-medium">
          /property/{slug}
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-4">
        <input
          className="border border-borderLight rounded-lg p-3"
          placeholder="City"
          value={city}
          onChange={e => setCity(e.target.value)}
          required
        />

        <input
          className="border border-borderLight rounded-lg p-3"
          placeholder="Sector"
          value={sector}
          onChange={e => setSector(e.target.value)}
          required
        />

        <input
          className="border border-borderLight rounded-lg p-3"
          placeholder="Property Type"
          value={propertyType}
          onChange={e => setPropertyType(e.target.value)}
          required
        />

        <input
          type="number"
          className="border border-borderLight rounded-lg p-3"
          placeholder="Price From (₹)"
          onChange={e => setPriceFrom(Number(e.target.value))}
          required
        />
      </div>

      {/* SEO PREVIEW */}
      <div className="bg-bgSection p-4 rounded-lg">
        <p className="text-sm font-semibold mb-1">SEO Preview</p>
        <p className="font-medium">{seo.metaTitle}</p>
        <p className="text-textMuted text-sm">
          {seo.metaDescription}
        </p>
      </div>

      <button
        type="submit"
        className="bg-primary hover:bg-primaryHover text-white px-6 py-3 rounded-lg font-semibold transition"
      >
        Save Listing
      </button>
    </form>
  );
}
