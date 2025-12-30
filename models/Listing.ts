import mongoose from "mongoose";

const ListingSchema = new mongoose.Schema({
  title: String,
  slug: { type: String, unique: true },
  city: String,
  sector: String,
  propertyType: String,
  priceFrom: Number,
  area: String,
  description: String,
  amenities: [String],
  images: [String],
  location: {
    lat: Number,
    lng: Number,
    address: String
  },
  seo: {
    metaTitle: String,
    metaDescription: String
  },
  brandId: String
});

export default mongoose.models.Listing ||
  mongoose.model("Listing", ListingSchema);
