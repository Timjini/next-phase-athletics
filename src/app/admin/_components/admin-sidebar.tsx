'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  FiHome, 
  FiCalendar, 
  FiUsers, 
  FiBookmark, 
  FiCode, 
  FiLogOut,
  FiChevronLeft,
  FiMenu
} from "react-icons/fi";

type MenuItem = {
  name: string;
  icon: React.ReactNode;
  slug: string;
  subItems?: MenuItem[];
};

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState(pathname);

  const menuItems: MenuItem[] = [
    { 
      name: 'Dashboard', 
      icon: <FiHome className="w-5 h-5" />, 
      slug: '/admin/dashboard' 
    },
    { 
      name: 'Camps', 
      icon: <FiCalendar className="w-5 h-5" />, 
      slug: '/admin/camps',
      // subItems: [
      //   { name: 'All Camps', icon: null, slug: '/admin/camps/all' },
      //   { name: 'Create New', icon: null, slug: '/admin/camps/new' },
      //   { name: 'Schedules', icon: null, slug: '/admin/camps/schedules' },
      // ]
    },
    { 
      name: 'Users', 
      icon: <FiUsers className="w-5 h-5" />, 
      slug: '/admin/users' 
    },
    { 
      name: 'Bookings', 
      icon: <FiBookmark className="w-5 h-5" />, 
      slug: '/admin/bookings',
      // subItems: [
      //   { name: 'All Bookings', icon: null, slug: '/admin/bookings/all' },
      //   { name: 'Reports', icon: null, slug: '/admin/bookings/reports' },
      // ]
    },
    { 
      name: 'Attendance', 
      icon: <FiCode className="w-5 h-5" />, 
      slug: '/admin/qr-reader' 
    },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    setActiveItem(pathname);
  }, [pathname]);

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
          aria-label="Toggle menu"
        >
          <FiMenu className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div className={`
        fixed lg:sticky top-0 left-0 h-screen z-40
        transition-all duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        ${isOpen ? 'w-64' : 'w-20'}
        bg-gradient-to-b from-blue-900 to-blue-800
        shadow-xl
      `}>
        {/* Sidebar header */}
        <div className={`
          flex items-center justify-between
          p-4 border-b border-blue-700
          ${!isOpen && 'flex-col justify-center gap-2'}
        `}>
          {isOpen ? (
            <h1 className="text-xl font-bold text-white">CampManager</h1>
          ) : (
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
              CM
            </div>
          )}
          
          <button
            onClick={toggleSidebar}
            className={`
              p-1 rounded-full hover:bg-blue-700 text-blue-200 hover:text-white
              transition-colors duration-200
              ${!isOpen && 'rotate-180'}
            `}
            aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>
        </div>

        {/* Menu items */}
        <nav className="p-4">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link href={item.slug} passHref>
                  <div
                    onClick={handleLinkClick}
                    className={`
                      flex items-center p-3 rounded-lg
                      transition-colors duration-200
                      ${activeItem === item.slug ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700 hover:text-white'}
                      ${!isOpen && 'justify-center'}
                    `}
                  >
                    <span className={`${isOpen ? 'mr-3' : ''}`}>
                      {item.icon}
                    </span>
                    {isOpen && (
                      <span className="font-medium">{item.name}</span>
                    )}
                  </div>
                </Link>

                {/* Sub-items */}
                {isOpen && item.subItems && (
                  <ul className="ml-8 mt-1 space-y-1">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.name}>
                        <Link href={subItem.slug} passHref>
                          <div
                            onClick={handleLinkClick}
                            className={`
                              flex items-center p-2 text-sm rounded-lg
                              transition-colors duration-200
                              ${activeItem === subItem.slug ? 'bg-blue-600 text-white' : 'text-blue-200 hover:bg-blue-600 hover:text-white'}
                            `}
                          >
                            {subItem.name}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Logout button */}
          <div className="absolute bottom-4 left-0 right-0 px-4">
            <button
              className={`
                flex items-center w-full p-3 rounded-lg
                transition-colors duration-200
                text-red-100 hover:bg-red-700 hover:text-white
                ${!isOpen && 'justify-center'}
              `}
            >
              <FiLogOut className={`w-5 h-5 ${isOpen ? 'mr-3' : ''}`} />
              {isOpen && <span className="font-medium">Logout</span>}
            </button>
          </div>
        </nav>
      </div>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}