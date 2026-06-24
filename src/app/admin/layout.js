import DashboardLayout from "@/components/admin/DashboardLayout.jsx";

export default function AdminLayout({ children }) {
  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  );
}