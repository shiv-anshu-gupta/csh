"use client";

import Link from "next/link";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import DropDown from "../components/Navbar/dropDown";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "Home", href: "/", hasDropdown: false, isActive: true },
    { name: "About", href: "/about", hasDropdown: false },
    { name: "Courses", href: "#", hasDropdown: true },
    { name: "Blog", href: "/blog", hasDropdown: false },
    { name: "Contact", href: "/contact", hasDropdown: false },
  ];

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "px-0 py-0" : "px-4 py-4"
      }`}
    >
      <nav
        className={`transition-all duration-300 ${
          isScrolled ? "max-w-full" : "mx-auto max-w-7xl"
        }`}
      >
        <div
          className={`flex items-center justify-between px-6 py-3 shadow-lg transition-all duration-300 ${
            isScrolled
              ? "rounded-none bg-white/90 backdrop-blur-md border-b border-gray-200"
              : "rounded-full bg-white"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500">
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">CSH</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 lg:flex">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-orange-500 ${
                    item.isActive ? "text-orange-400" : "text-gray-700"
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </Link>

                {/* Dropdown (visible on hover) */}
                {item.name === "Courses" && item.hasDropdown && (
                  <div className="absolute left-0 top-full hidden group-hover:block transition duration-200 delay-75">
                    <DropDown />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden text-gray-600 hover:text-gray-900 lg:block">
              <Search className="h-5 w-5" />
            </button>

            <Link
              href="/login"
              className="hidden text-sm font-medium text-gray-700 hover:text-gray-900 lg:block"
            >
              Log In
            </Link>

            <Button className="bg-orange-500 px-6 py-2 text-sm font-medium text-white hover:bg-orange-600">
              Get Started
            </Button>

            <button
              className="text-gray-600 hover:text-gray-900 lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mt-2 rounded-2xl bg-white p-4 shadow-lg lg:hidden">
            <div className="space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex w-full items-center justify-between text-left text-sm font-medium transition-colors hover:text-orange-500 ${
                    item.isActive ? "text-orange-500" : "text-gray-700"
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </Link>
              ))}

              <hr className="my-4" />

              <div className="space-y-3">
                <button className="flex w-full items-center gap-2 text-sm font-medium text-gray-700">
                  <Search className="h-4 w-4" />
                  Search
                </button>
                <Link
                  href="/login"
                  className="w-full text-left text-sm font-medium text-gray-700"
                >
                  Log In
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
