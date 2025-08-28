"use client";

import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineBriefcase } from "react-icons/hi";

export default function page() {
  const projects = [
    { src: "/images/a.JPG" },
    { src: "/images/b.JPG" },
    { src: "/images/c.JPG" },
    { src: "/images/d.JPG" },
    { src: "/images/e.JPG" },
    { src: "/images/f.JPG" },
    { src: "/images/g.JPG" },
    { src: "/images/h.JPG" },
    { src: "/images/i.JPG" },
    { src: "/images/j.JPG" },
    { src: "/images/k.JPG" },
    { src: "/images/l.JPG" },
    { src: "/images/m.JPG" },
    { src: "/images/n.JPG" },
    { src: "/images/o.JPG" },
  ];
  return (
    <>
      <div className="bg-[#F9F9F9] w-full">
        {/* Hero Section */}
        <section
          className="relative h-[400px] bg-center text-white "
          style={{
            backgroundImage: "url('/images/change-chlost.JPG')",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 h-full flex items-center px-8">
            <p className="bg-green-500/10 text-3xl p-4 rounded-md max-w-2xl text-white font-semibold backdrop-blur-sm ml-5">
              Tailored Ranch Remodel
            </p>
          </div>
        </section>
        {/* Title & Info Section */}
        <section className="px-8">
          {/* Location & Services */}
          <div className="flex flex-wrap items-center gap-8 mt-4 justify-between md:justify-start">
            {/* Location */}
            <div className="flex items-center gap-2 text-black">
              <FaMapMarkerAlt size={20} />
              <span className="font-medium text-xl md:text-2xl">
                Sterng Mean Chey, Phnom Penh
              </span>
            </div>

            {/* Services */}
            <div className="flex items-center gap-2 text-black">
              <HiOutlineBriefcase size={20} />
              <span className="font-medium text-xl md:text-2xl">
                Architectural design, space planning
              </span>
            </div>
          </div>
        </section>

        {/*text*/}
        <div>
          <h1 className="text-center font-semibold text-xl mt-5 text-[#4F4F4F]">
            The homeowner now has a beautiful, safe, and <br /> updated space
            that fits her style, which she can <br /> live in for years to come.
          </h1>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-5 md:grid-cols-4 p-5">
          {projects.map((img, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
            >
              <Image
                src={img.src}
                alt=""
                className="w-full h-full object-cover rounded-lg"
                width={192}
                height={192}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
