import { deleteListing } from "@/lib/listing";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Listing from "@/models/Listing";

export async function POST(req: Request) {
  const { title, slug, city, priceFrom } = await req.json();
  const listing = await Listing.create({ title, slug, city, priceFrom });
  return NextResponse.json(listing);
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await deleteListing(params.id);
  return NextResponse.json({ success: true });
}

export async function GET() {
  await connectDB();

  const listings = await Listing.find(
    {},
    { title: 1, slug: 1, propertyType: 1, city: 1 }
  )
    .sort({ createdAt: -1 })
    .lean();

  return NextResponse.json(listings);
}