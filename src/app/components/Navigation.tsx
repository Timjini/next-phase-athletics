"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";

const Navigation = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedInside = Object.values(dropdownRefs.current).some((ref) =>
        ref?.contains(event.target as Node)
      );
      if (!clickedInside) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (e: React.MouseEvent, itemName: string) => {
    e.stopPropagation();
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  // remove navigation from admin panel
  const isAdminPage = pathname.startsWith('/admin');

  if (isAdminPage) {
    return null;
  }

  const navItems = [
    {
      id: "camps",
      name: "Camps",
      href: "/camps",
      subItems: [
        { name: "XLR8 with Dwain", href: "/camps/xlr8" },
        // { name: "All Camp Hosts", href: "/camps/hosts" }
      ],
    },
    {
      id: "about",
      name: "About",
      href: "/about",
      subItems: [
        { name: "Dwain Chambers", href: "/event-hosts/dwain-chambers" },
        { name: "Our Team", href: "/about#team" },
      ],
    },
    { id: "contact", name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full glassMorphicNAvigation text-white px-6 md:px-8 py-4 flex items-center justify-between z-50 fixed top-0 shadow-lg">
      {/* Logo */}
      <Link
        href="/"
        className="text-xl font-bold hover:text-yellow-400 transition-colors"
      >
        <div className="flex items-center">
          <Image
            src="/images/nextPhase-logo-white2.png"
            alt="Logo"
            width={50}
            height={50}
            className="h-12 w-12 rounded-lg mr-2"
          />
          <span className="hidden md:block">NextPhase</span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <div
            key={item.id}
            className="relative"
            ref={(el) => {
              dropdownRefs.current[item.id] = el;
            }}
          >
            {item.subItems ? (
              <>
                <button
                  onClick={(e) => toggleDropdown(e, item.id)}
                  className="flex items-center hover:text-yellow-400 transition-colors"
                >
                  {item.name}
                  {openDropdown === item.id ? (
                    <ChevronUp className="ml-1 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </button>
                {openDropdown === item.id && (
                  <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className={`block px-4 py-2 hover:bg-gray-700 ${
                          pathname === subItem.href ? "text-yellow-400" : ""
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.href}
                className={`hover:text-yellow-400 transition-colors ${
                  pathname === item.href ? "text-yellow-400" : ""
                }`}
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <div className="flex space-x-3">
            <SignInButton mode="modal">
              <button className="px-4 py-1 border border-white rounded hover:bg-white hover:text-black transition">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="px-4 py-1 border border-white rounded hover:bg-yellow-400 hover:text-black transition">
                Sign Up
              </button>
            </SignUpButton>
          </div>
        </SignedOut>
      </div>

      {/* Mobile Menu */}
      <div className="flex md:hidden items-center space-x-4">
        <UserButton afterSignOutUrl="/" />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-gradient-to-b from-black bg-blue-900 text-white flex flex-col items-center justify-center space-y-8 text-2xl z-40 pt-20 min-h-screen">
          <div className="">
            <ul className="mt-2 font-extrabold flex flex-col text-2xl gap-6">
              <li>
                <Link href="/" className="hover:text-yellow-400">
                  Home
                </Link>
              </li>
              <li>
              <Link href="/camps/xlr8" className="hover:text-yellow-400">
                XLR Camp
              </Link>
              </li>
             <li>
             <Link href="/about" className="hover:text-yellow-400">
                About NextPhase
              </Link>
             </li>
             <li>
             <Link
                href="/event-hosts/dwain-chambers"
                className="hover:text-yellow-400"
              >
                Dwain Chambers
                </Link>
             </li>
             
                <li>
              <Link
                href="/event-hosts/dwain-chambers"
                className="hover:text-yellow-400"
              >
                Contact
              </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
