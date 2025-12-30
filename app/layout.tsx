import { BRAND } from "@/config/brands";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <style>{`
        :root {
          --color-primary: ${BRAND.theme.primary};
          --color-primary-hover: ${BRAND.theme.secondary};
        }
      `}</style>
    </head>
    <body>{children}</body>
  </html>
  );
}
