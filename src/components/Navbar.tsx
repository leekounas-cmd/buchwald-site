"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const BOOKING_URL = "/book";

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

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/meet-us", label: "Meet Us" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isServicePage = serviceLinks.some((l) => pathname === l.href) || pathname === "/services" || pathname === "/new-patient";

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200"
          : "bg-white border-b border-gray-100"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo-color.png"
              alt="Buchwald Family Dentistry"
              width={160}
              height={40}
              className="h-16 lg:h-9 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                pathname === "/"
                  ? "text-primary bg-primary-light"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              Home
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
                className={`px-3 py-2 rounded-lg text-[13px] font-medium transition-colors inline-flex items-center gap-1 ${
                  isServicePage
                    ? "text-primary bg-primary-light"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                Services
                <svg className={`h-3 w-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-2.5 text-sm transition-colors ${
                        pathname === link.href
                          ? "text-primary bg-primary-light font-medium"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/new-patient"
              className={`px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                pathname === "/new-patient"
                  ? "text-primary bg-primary-light"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              New Patients
            </Link>

            <Link
              href="/meet-us"
              className={`px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                pathname === "/meet-us"
                  ? "text-primary bg-primary-light"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              Meet Us
            </Link>

            <a
              href={BOOKING_URL}
              className="ml-3 rounded-lg bg-primary px-5 py-2.5 text-[13px] font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-md hover:shadow-primary/20"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-gray-700 p-2"
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-200 bg-white ${
          menuOpen ? "max-h-[600px] border-t border-gray-100" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-6 pt-2 space-y-0.5">
          <Link
            href="/"
            className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
              pathname === "/"
                ? "bg-primary-light text-primary"
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            Home
          </Link>

          {/* Mobile Services Accordion */}
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
              isServicePage
                ? "bg-primary-light text-primary"
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
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
                className={`block rounded-lg px-4 py-2.5 text-sm transition-colors ${
                  pathname === "/services"
                    ? "text-primary font-medium"
                    : "text-gray-400 hover:text-gray-900"
                }`}
              >
                All Services
              </Link>
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-lg px-4 py-2.5 text-sm transition-colors ${
                    pathname === link.href
                      ? "text-primary font-medium"
                      : "text-gray-400 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          <Link
            href="/new-patient"
            className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
              pathname === "/new-patient"
                ? "bg-primary-light text-primary"
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            New Patients
          </Link>

          <Link
            href="/meet-us"
            className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
              pathname === "/meet-us"
                ? "bg-primary-light text-primary"
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            Meet Us
          </Link>

          <a
            href={BOOKING_URL}
            className="mt-3 block rounded-lg bg-primary px-5 py-3 text-center text-sm font-semibold text-white hover:bg-primary-dark"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}
