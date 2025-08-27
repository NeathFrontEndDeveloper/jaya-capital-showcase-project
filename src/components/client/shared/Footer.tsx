"use client";
import LOGO from "@/assets/logo.png";
import { APP_NAME, NAV_ITEMS, SocialLinks } from "@/constants/Data";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const pathname = usePathname();
  const isActive = (link: string) => pathname === link;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white">
      <div className="container mx-auto px-6 py-12 flex flex-col items-center justify-center gap-8 text-center md:text-left">
        {/* Logo + App name */}
        <div className="flex flex-col items-center space-y-3">
          <Image
            src={LOGO}
            alt="company logo"
            className="w-14 h-14 border border-gray-300 rounded-full"
          />
          <h1 className="text-3xl font-semibold">{APP_NAME}</h1>
        </div>

        {/* Navigation */}
        <div className="flex flex-col items-center space-y-3">
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
        </div>

        {/* Social links */}
        <div className="flex flex-col items-center md:items-end space-y-3">
          <div className="flex gap-4">
            {SocialLinks.map((items, index) => (
              <Link
                key={index}
                href={items.url}
                className="flex items-center justify-center w-10 h-10 border border-black rounded-full text-[#1F1F1F] hover:text-[#006400] transition-colors duration-300 text-2xl"
              >
                <items.icon />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center py-6 border-t border-gray-200 text-sm text-gray-500">
        © {currentYear} Jaya Capital. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
