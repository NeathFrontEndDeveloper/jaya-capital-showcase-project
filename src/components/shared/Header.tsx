"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import JayaLogo from "@/assets/logo.png";
import { APP_NAME } from "@/constants/Data";
import Image from "next/image";
import { NAV_ITEMS } from "@/constants/Data";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (link: string) => pathname === link;

  const handleClose = () => {
    setIsOpen(false);
  };

  const LOGO = JayaLogo;

  return (
    <header className="w-full z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link
          href="/"
          className="text-2xl font-semibold hover:text-[#006400] transition-colors duration-300 flex items-center justify-between space-x-4"
        >
          <span className="w-auto h-auto rounded-full">
            <Image
              src={LOGO}
              alt="Company Logo"
              className="w-14 h-14 border border-gray-300 rounded-full overflow-hidden"
            />
          </span>
          <span>{APP_NAME}</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map(({ link, label }) => (
            <li key={link}>
              <Link
                href={link}
                className={`relative px-1 py-2 group transition-colors duration-300 text-md ${
                  isActive(link)
                    ? "text-[#006400]"
                    : "text-[#1F1F1F] hover:text-[#006400]"
                }`}
              >
                {label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#006400] transition-all duration-300 ${
                    isActive(link) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="md:hidden flex flex-col px-6 py-4 space-y-4 text-[#1F1F1F]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {NAV_ITEMS.map(({ link, label }, i) => (
              <motion.li
                key={link}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link}
                  onClick={handleClose}
                  className={`block py-2 pl-4 border-l-2 transition-all duration-300 ${
                    isActive(link)
                      ? "text-[#006400] border-[#006400]"
                      : "text-[#1F1F1F] border-transparent hover:text-[#006400] hover:border-[#006400]"
                  }`}
                >
                  {label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
