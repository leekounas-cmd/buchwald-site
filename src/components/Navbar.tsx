"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const BOOKING_URL = "https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE";
const PHONE = "(972) 644-3280";
const PHONE_HREF = "tel:972-644-3280";

const newPatientLinks = [
  { href: "/new-patient", label: "What's My Visit Like?" },
  { href: "/forms", label: "First Visit Forms" },
];

const serviceLinks = [
  { href: "/services/cleaning", label: "Cleaning & Exam" },
  { href: "/services/general", label: "General Dentistry" },
  { href: "/services/cosmetic", label: "Cosmetic Dentistry" },
  { href: "/services/restorative", label: "Restorative Dentistry" },
  { href: "/dental-implants", label: "Dental Implants" },
  { href: "/invisalign", label: "Invisalign" },
  { href: "/teeth-whitening", label: "Teeth Whitening" },
  { href: "/innerview", label: "InnerView" },
  { href: "/laser-therapy", label: "Laser Therapy" },
  { href: "/emergency", label: "Emergency Dentistry" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [newPatientsOpen, setNewPatientsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileNewPatientsOpen, setMobileNewPatientsOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const npDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileNewPatientsOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (npDropdownRef.current && !npDropdownRef.current.contains(e.target as Node)) {
        setNewPatientsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isServicePage = serviceLinks.some((l) => pathname === l.href) || pathname === "/services";
  const isNewPatientArea = pathname === "/new-patient" || pathname === "/forms";

  const desktopLink = (active: boolean, danger = false) =>
    `px-3 py-2 rounded-full text-[13px] font-medium transition-colors ${
      active
        ? "text-white bg-white/10"
        : danger
          ? "text-red-400 hover:text-red-300 hover:bg-white/5"
          : "text-[#B9CBD4] hover:text-white hover:bg-white/5"
    }`;

  const mobileLink = (active: boolean, danger = false) =>
    `block rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
      active
        ? "bg-white/10 text-white"
        : danger
          ? "text-red-400 hover:bg-white/5"
          : "text-[#B9CBD4] hover:bg-white/5 hover:text-white"
    }`;

  return (
    <>
      {/* Utility line */}
      <div className="bg-[#0C1820] border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-2 flex items-center justify-between text-xs text-[#8FA9B5]">
          <p className="truncate">300 N Coit Rd #245, Richardson, TX</p>
          <a href={PHONE_HREF} className="font-semibold text-white hover:text-primary transition-colors shrink-0">
            {PHONE}
          </a>
        </div>
      </div>

      <nav
        className={`sticky top-0 z-50 bg-[#0C1820] transition-shadow duration-200 ${
          scrolled ? "shadow-lg shadow-black/20" : ""
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between gap-4">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo-white-trim.png"
                alt="Buchwald Family Dentistry"
                width={475}
                height={117}
                className="h-8 w-auto"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              <Link href="/" className={desktopLink(pathname === "/")}>
                Home
              </Link>
              {/* New Patients Dropdown */}
              <div
                ref={npDropdownRef}
                className="relative"
                onMouseEnter={() => setNewPatientsOpen(true)}
                onMouseLeave={() => setNewPatientsOpen(false)}
              >
                <Link
                  href="/new-patient"
                  className={`${desktopLink(isNewPatientArea)} inline-flex items-center gap-1`}
                >
                  New Patients
                  <svg className={`h-3 w-3 transition-transform ${newPatientsOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                {newPatientsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-60 rounded-2xl bg-[#132430] border border-white/10 py-2 shadow-xl z-50">
                    {newPatientLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`block px-4 py-2.5 text-sm transition-colors ${
                          pathname === link.href
                            ? "text-white bg-white/5 font-semibold"
                            : "text-[#B9CBD4] hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/meet-us" className={desktopLink(pathname === "/meet-us")}>
                Meet Us
              </Link>
              <Link href="/emergency" className={desktopLink(pathname === "/emergency", true)}>
                Emergency
              </Link>
              <Link href="/blog" className={desktopLink(pathname.startsWith("/blog"))}>
                Blog
              </Link>

              {/* Services Dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href="/services"
                  className={`${desktopLink(isServicePage)} inline-flex items-center gap-1`}
                >
                  Services
                  <svg className={`h-3 w-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                {servicesOpen && (
                  <div className="absolute top-full right-0 mt-2 w-60 rounded-2xl bg-[#132430] border border-white/10 py-2 shadow-xl z-50">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`block px-4 py-2.5 text-sm transition-colors ${
                          pathname === link.href
                            ? "text-white bg-white/5 font-semibold"
                            : "text-[#B9CBD4] hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <a
                href={BOOKING_URL}
                className="ml-3 rounded-full bg-primary px-6 py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-primary-dark"
              >
                Book a Visit
              </a>
            </div>

            {/* Mobile: CTA + hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={BOOKING_URL}
                className="rounded-full bg-primary px-4 py-2 text-[13px] font-bold text-white hover:bg-primary-dark transition-colors"
              >
                Book a Visit
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white p-2"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-200 bg-[#0C1820] ${
            menuOpen ? "max-h-[1000px] border-t border-white/10" : "max-h-0"
          }`}
        >
          <div className="px-4 pb-6 pt-2 space-y-0.5">
            <Link href="/" className={mobileLink(pathname === "/")}>
              Home
            </Link>
            {/* Mobile New Patients Accordion */}
            <button
              onClick={() => setMobileNewPatientsOpen(!mobileNewPatientsOpen)}
              className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                isNewPatientArea ? "bg-white/10 text-white" : "text-[#B9CBD4] hover:bg-white/5 hover:text-white"
              }`}
            >
              New Patients
              <svg className={`h-4 w-4 transition-transform ${mobileNewPatientsOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {mobileNewPatientsOpen && (
              <div className="pl-4 space-y-0.5">
                {newPatientLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block rounded-xl px-4 py-2.5 text-sm transition-colors ${
                      pathname === link.href ? "text-white font-semibold" : "text-[#8FA9B5] hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/meet-us" className={mobileLink(pathname === "/meet-us")}>
              Meet Us
            </Link>
            <Link href="/emergency" className={mobileLink(pathname === "/emergency", true)}>
              Emergency
            </Link>
            <Link href="/blog" className={mobileLink(pathname.startsWith("/blog"))}>
              Blog
            </Link>

            {/* Mobile Services Accordion */}
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                isServicePage ? "bg-white/10 text-white" : "text-[#B9CBD4] hover:bg-white/5 hover:text-white"
              }`}
            >
              Services
              <svg className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {mobileServicesOpen && (
              <div className="pl-4 space-y-0.5">
                <Link
                  href="/services"
                  className={`block rounded-xl px-4 py-2.5 text-sm transition-colors ${
                    pathname === "/services" ? "text-white font-semibold" : "text-[#8FA9B5] hover:text-white"
                  }`}
                >
                  All Services
                </Link>
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block rounded-xl px-4 py-2.5 text-sm transition-colors ${
                      pathname === link.href ? "text-white font-semibold" : "text-[#8FA9B5] hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            <a
              href="sms:9726443280"
              className="mt-3 block rounded-full border border-white/25 px-5 py-3.5 text-center text-sm font-semibold text-white hover:border-white/60 transition-colors"
            >
              Text Us
            </a>
            <a
              href={BOOKING_URL}
              className="mt-2 block rounded-full bg-primary px-5 py-3.5 text-center text-sm font-bold text-white hover:bg-primary-dark"
            >
              Book a Visit
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
