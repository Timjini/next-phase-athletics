'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuItems } from "@/app/types/common";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState(pathname);

  const menuItems: MenuItems[] = [
    { name: 'Dashboard', icon: '🏠', slug: '/admin/dashboard' },
    { name: 'Camps', icon: '⛺', slug: '/admin/camps' },
    { name: 'Users', icon: '👥', slug: '/admin/users' },
    { name: 'Bookings', icon: '📊', slug: '/admin/bookings' },
  ];

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    setActiveItem(pathname);
  }, [pathname]);

  return (
    <>
      {/* Toggle Button - only on mobile */}
      <div className="absolute lg:hidden right-0 p-4 z-50 bottom-0 lg:top-12 ">
        <button
          className="relative group cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle Sidebar"
        >
          <div className="relative flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-[#f5f5f5] ring-0 ring-gray-900 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 group-focus:-rotate-[45deg] origin-center">
              <div className="bg-gray-900 h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75 group-focus:-translate-y-[1px]"></div>
              <div className="bg-gray-900 h-[1px] rounded"></div>
              <div className="bg-gray-900 h-[2px] w-1/2 rounded self-end transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-left delay-75 group-focus:translate-y-[1px]"></div>
            </div>
          </div>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } lg:block fixed inset-0 w-full h-full lg:static lg:h-auto lg:w-auto col-span-1 bg-gradient-to-t from-[#09131D] to-[#00215f] text-gray-200 pt-12 px-4 z-40`}
      >
        <ul>
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.slug}
                onClick={() => setActiveItem(item.slug)}
                passHref
              >
                <button
                  className={`flex items-center w-full p-4 hover:bg-gray-700 transition-colors hover:cursor-pointer px-4 py-2 rounded-sm ${activeItem === item.slug ? 'bg-blue-800' : ''}`}
                >
                  <span className="text-xl mr-3">{item.icon}</span>
                  <span className="text-gray-100">{item.name}</span>
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
