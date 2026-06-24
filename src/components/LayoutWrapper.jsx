"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappIcon from "@/components/WhatsappIcon";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const isAdminRoute = pathname.startsWith("/admin") ||
  pathname.startsWith("/auth");;

  return (
    <>
      {!isAdminRoute && <Navbar />}

      {children}

      {!isAdminRoute && <WhatsappIcon />}
      {!isAdminRoute && <Footer />}
    </>
  );
}