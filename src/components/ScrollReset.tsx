"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Forces the viewport to the top on every route change. Some mobile browsers
// (iOS Safari especially) restore or keep scroll positions across App Router
// navigations; this makes landing at the top deterministic. Hash links are
// left alone so in-page anchors like /forms#step-1 still work.
export function ScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
