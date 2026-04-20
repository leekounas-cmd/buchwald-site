"use client";

import { usePathname } from "next/navigation";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyBottomBar } from "@/components/StickyBottomBar";
import { NewPatientPopup } from "@/components/NewPatientPopup";

const BARE_ROUTES = ["/special"];

function isBare(pathname: string | null) {
  if (!pathname) return false;
  return BARE_ROUTES.some((r) => pathname === r || pathname.startsWith(`${r}/`));
}

export function SiteChromeTop() {
  const pathname = usePathname();
  if (isBare(pathname)) return null;
  return (
    <>
      <AnnouncementBar />
      <Navbar />
    </>
  );
}

export function SiteChromeBottom() {
  const pathname = usePathname();
  if (isBare(pathname)) return null;
  return (
    <>
      <Footer />
      <StickyBottomBar />
      <NewPatientPopup />
    </>
  );
}
