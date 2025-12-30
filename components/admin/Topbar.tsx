import { BRAND } from "@/config/brands";

export default function Topbar() {
  return (
    <header className="h-14 bg-bgCard border-b border-borderLight px-6 flex items-center justify-between">
      <p className="font-medium">
        {BRAND.name} Admin
      </p>

      <form action="/api/auth/logout" method="POST">
        <button className="text-sm text-red-600 font-medium">
          Logout
        </button>
      </form>
    </header>
  );
}
