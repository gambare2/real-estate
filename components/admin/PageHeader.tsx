import Link from "next/link";

export default function PageHeader({
  title,
  actionLabel,
  actionHref,
}: {
  title: string;
  actionLabel?: string;
  actionHref?: string;
}) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-semibold">{title}</h1>

      {actionHref && (
        <Link
          href={actionHref}
          className="bg-primary hover:bg-primaryHover text-white px-5 py-2 rounded-lg font-semibold transition"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
