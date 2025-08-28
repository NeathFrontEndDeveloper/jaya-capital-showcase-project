"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/contact"); // Navigate to Contact page
  };

  return (
    <section className="bg-white">
      {/* Top Banner Image */}
      <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden">
        <Image
          src="/images/dining-area.JPG"
          alt="About Us Banner"
          fill
          className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>

      {/* About Us Section */}
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700">
          About Us
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Bringing spaces to life with craftsmanship and style.
        </p>

        <div className="mt-10 space-y-10">
          {/* First Row */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed">
                Since 2015, Jaya Capital has specialized in home renovations,
                turning visions into reality. From modern kitchens to serene
                outdoor spaces, we deliver exceptional results that enhance
                comfort and add value to your property.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Our team of architects, designers, and builders works closely
                with clients to bring their dream spaces to life, on time and
                within budget.
              </p>
            </div>
            <div className="flex-1 relative w-full h-64 overflow-hidden rounded-lg group">
              <Image
                src="/images/living-room-ab.JPG"
                alt="Renovation Project 2"
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-0 active:opacity-100 transition-opacity duration-200"></div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed">
                Beyond residential developments, we are a trusted partner for
                commercial spaces, offering innovative solutions for
                restaurants, offices, and more.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                We are committed to quality, sustainability, and style — using
                premium materials and cutting-edge techniques to ensure every
                project exceeds expectations.
              </p>
            </div>
            <div className="flex-1 relative w-full h-64 overflow-hidden rounded-lg group">
              <Image
                src="/images/living-room-ab.JPG"
                alt="Renovation Project 2"
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-0 active:opacity-100 transition-opacity duration-200"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-xl md:text-2xl font-bold text-center text-green-700">
            Why homeowners choose us?
          </h3>
          <p className="text-center text-gray-600 mt-1">
            At Jaya Capital, we combine craftsmanship with care, making each
            detail count perfectly.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8 text-center">
            {[
              "Licensed & Fully Insured",
              "Experienced Team",
              "On-Time Delivery",
              "Custom Design",
              "Tailored Projects",
              "Trusted by Homeowners",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-sm border border-green-200 rounded-lg p-4 text-green-700 font-medium transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-4 py-10 text-center">
        <h3 className="text-xl md:text-2xl font-bold text-green-700 mb-4">
          Ready to Transform Your Space?
        </h3>
        <p className="text-gray-600 mb-6">
          Contact us today to discuss your renovation project and get a free
          consultation.
        </p>
        <button
          onClick={handleContactClick}
          className="bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-500 transition"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
}
