"use client";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineBriefcase } from "react-icons/hi";

export default function PortfolioDetails() {
  return (
    <div className="bg-[#F9F9F9] w-full">
      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-center text-white"
        style={{
          backgroundImage: "url('/images/2.jpg')", // public/images/2.jpg
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </section>

      {/* Title & Info Section */}
      <section className="px-8">
        <div className="relative z-10 flex items-center">
          <p className="text-3xl p-4 rounded-md max-w-2xl text-green-700 font-semibold backdrop-blur-sm">
            Tailored Ranch Remodel
          </p>
        </div>

        {/* Location & Services */}
        <div className="flex flex-wrap items-center gap-8 mt-4 justify-center md:justify-start">
          {/* Location */}
          <div className="flex items-center gap-2 text-green-600">
            <FaMapMarkerAlt size={20} />
            <span className="font-medium">Sterng Mean Chey, Phnom Penh</span>
          </div>

          {/* Services */}
          <div className="flex items-center gap-2 text-green-600">
            <HiOutlineBriefcase size={20} />
            <span className="font-medium">
              Architectural design, space planning
            </span>
          </div>
        </div>
      </section>

      {/* Project Highlights Section */}
      <section className=" p-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center mt-8">
        {/* Left Side - Text */}
        <div>
          <h2 className="text-green-800 font-bold text-2xl mb-8">
            Project highlights
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Updated fireplace with modern gas insert.</li>
            <li>Guest bathroom and office/guest bedroom added.</li>
            <li>Reconfigured kitchen for optimal workspace and storage.</li>
            <li>
              Added front and back porch for protection from the elements.
            </li>
            <li>
              Zero threshold entries, curbless shower, and wider doors for aging
              in place.
            </li>
          </ul>
        </div>

        {/* Right Side - Image */}
        <div className="p-8 bg-white">
          <Image
            src="/2.jpg"
            alt="Before renovation"
            width={500}
            height={300}
          />
        </div>
      </section>
      {/*text*/}
      <div>
        <h1 className="text-center font-semibold text-xl mt-5 text-[#4F4F4F]">
          The homeowner now has a beautiful, safe, and <br /> updated space that
          fits her style, which she can <br /> live in for years to come.
        </h1>
      </div>
    </div>
  );
}
