"use client";
import Link from "next/link";

const Header = () => {
  const NAV_ITEMS = [
    { label: "Home", link: "/" },
    { label: "About Us", link: "#" },
    { label: "Testimonials", link: "#" },
    { label: "Service", link: "#" },
    { label: "Portfolio", link: "#" },
    { label: "Contact", link: "#" },
  ];
  return (
    <>
      <header className="w-full bg-[#f5f5dc] shadow-md">
        <nav className="container mx-auto w-full flex items-center justify-between p-4">
          <div>
            <h1 className="text-2xl font-semibold">Jaya Capital</h1>
          </div>
          <ul className="flex space-x-6">
            {NAV_ITEMS.map((item, index) => (
              <li key={index}>
                <Link href={item.link} className="text-md ">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
