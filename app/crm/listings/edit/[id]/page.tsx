import { getListingById, updateListing } from "@/lib/listing";
import { generateSeo } from "@/lib/seo";
import { generateSlug } from "@/lib/slug";

export default async function EditListingPage({ params }: any) {
  const listing = await getListingById(params.id);
  if (!listing) return <p>Not found</p>;

  const listingId = listing.id;

  async function update(formData: FormData) {
    "use server";

    const title = formData.get("title") as string;
    const city = formData.get("city") as string;
    const sector = formData.get("sector") as string;
    const propertyType = formData.get("propertyType") as string;
    const priceFrom = Number(formData.get("priceFrom"));

    const slug = generateSlug(title);
    const seo = generateSeo({
      title,
      city,
      sector,
      propertyType,
      priceFrom
    });

    await updateListing(listingId, {
      title,
      slug,
      city,
      sector,
      propertyType,
      priceFrom,
      seo
    });
  }

  return (
    <form
      action={update}
      className="max-w-3xl bg-bgCard border border-borderLight rounded-xl p-6 space-y-5"
    >
      <h1 className="text-2xl font-semibold">Edit Listing</h1>

      <input name="title" defaultValue={listing.title} className="w-full border border-borderLight p-3 rounded-lg" />
      <input name="city" defaultValue={listing.city} className="w-full border border-borderLight p-3 rounded-lg" />
      <input name="sector" defaultValue={listing.sector} className="w-full border border-borderLight p-3 rounded-lg" />
      <input name="propertyType" defaultValue={listing.propertyType} className="w-full border border-borderLight p-3 rounded-lg" />
      <input name="priceFrom" defaultValue={listing.priceFrom} type="number" className="w-full border border-borderLight p-3 rounded-lg" />

      <button className="bg-primary hover:bg-primaryHover text-white px-6 py-3 rounded-lg font-semibold">
        Update Listing
      </button>
    </form>
  );
}
