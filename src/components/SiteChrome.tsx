"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyBottomBar } from "@/components/StickyBottomBar";

const BARE_ROUTES = ["/special", "/whitening-free", "/visit", "/free-whitening", "/preview-v5", "/preview-v6", "/preview-v7", "/preview-v8"];

function isBare(pathname: string | null) {
  if (!pathname) return false;
  return BARE_ROUTES.some((r) => pathname === r || pathname.startsWith(`${r}/`));
}

export function SiteChromeTop() {
  const pathname = usePathname();
  if (isBare(pathname)) return null;
  return <Navbar />;
}

export function SiteChromeBottom() {
  const pathname = usePathname();
  if (isBare(pathname)) return null;
  return (
    <>
      <Footer />
      <StickyBottomBar />
    </>
  );
}
