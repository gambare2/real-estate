import Link from "next/link";

export function ListingsTable({
  listings,
}: {
  listings: any[];
}) {
  return (
    <div className="bg-bgCard border border-borderLight rounded-xl overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-bgSection text-textMuted">
          <tr>
            <th className="p-4 text-left">Project</th>
            <th>City</th>
            <th>Price</th>
            <th className="w-40 text-right pr-6">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {listings.map((item) => (
            <tr
              key={item.id}
              className="border-t border-borderLight hover:bg-bgSection"
            >
              <td className="p-4 font-medium">
                {item.title}
                <p className="text-xs text-textMuted">
                  /property/{item.slug}
                </p>
              </td>

              <td>{item.city}</td>

              <td>
                ₹ {item.priceFrom.toLocaleString()}
              </td>

              <td className="text-right pr-6 space-x-3">
                <Link
                  href={`/crm/listings/edit/${item.id}`}
                  className="text-primary font-medium"
                >
                  Edit
                </Link>

                <DeleteButton id={item.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DeleteButton({ id }: { id: string }) {
  async function handleDelete() {
    if (!confirm("Delete this listing?")) return;
    await fetch(`/api/listings/${id}`, {
      method: "DELETE",
    });
    location.reload();
  }

  return (
    <button className="text-red-600 font-medium">
      Delete
    </button>
  );
}
