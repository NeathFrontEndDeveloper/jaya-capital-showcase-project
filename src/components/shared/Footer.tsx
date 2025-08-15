"use client";
import LOGO from "@/assets/logo.png";
import { APP_NAME } from "@/constants/Data";
import Image from "next/image";
import { NAV_ITEMS } from "@/constants/Data";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const pathname = usePathname();

  const isActive = (link: string) => pathname === link;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full h-60 border border-black flex flex-col items-center bg-white">
      <div className="p-12">
        <div className="space-y-4">
          {/* App name with logo */}
          <div className="flex flex-col items-center space-y-2">
            <span className="w-auto h-auto rounded-full">
              <Image
                src={LOGO}
                alt="company logo"
                className="w-14 h-14 border border-black rounded-full overflow-hidden"
              />
            </span>
            <h1 className="text-2xl font-semibold">{APP_NAME}</h1>
          </div>

          {/* Nav_ITEMS */}
          <ul className="flex items-center space-x-6">
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

          {/* social icons link */}
          <div className="w-full border border-black"></div>
        </div>
      </div>
      <div className="border-t border-black w-full text-center p-6 bg-white">
        <p>@ {currentYear} Jaya Capital. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
