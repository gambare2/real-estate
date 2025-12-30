import Listing from "@/models/Listing";
import { connectDB } from "./db";
import { Listing as ListingType } from "@/types/listing";

export async function getListingBySlug(
  slug: string
): Promise<ListingType | null> {
  await connectDB();

  const listing = await Listing.findOne({ slug }).lean();

  if (!listing) return null;

  return {
    ...listing,
    id: listing._id.toString()
  };
}

export async function createListing(
  data: Omit<ListingType, "id">
): Promise<ListingType> {
  await connectDB();

  const listing = await Listing.create(data);

  return {
    ...listing.toObject(),
    id: listing._id.toString()
  };
}

/* GET ALL LISTINGS */
export async function getAllListings(): Promise<ListingType[]> {
  await connectDB();

  const listings = await Listing.find().sort({ createdAt: -1 }).lean();

  return listings.map(l => ({
    ...l,
    id: l._id.toString()
  })) as ListingType[];
}

/* GET BY ID (EDIT) */
export async function getListingById(
  id: string
): Promise<ListingType | null> {
  await connectDB();

  const listing = await Listing.findById(id).lean();
  if (!listing) return null;

  return {
    ...listing,
    id: listing._id.toString()
  } as ListingType;
}

/* UPDATE */
export async function updateListing(
  id: string,
  data: Partial<ListingType>
) {
  await connectDB();

  await Listing.findByIdAndUpdate(id, data);
  return { success: true };
}

/* DELETE */
export async function deleteListing(id: string) {
  await connectDB();

  await Listing.findByIdAndDelete(id);
  return { success: true };
}
