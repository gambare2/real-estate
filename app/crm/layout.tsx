import CRMLayout from "./components/CrmLayout";

export default function CRMPageLayout({ children }: { children: React.ReactNode }) {
  return <CRMLayout>{children}</CRMLayout>;
}
