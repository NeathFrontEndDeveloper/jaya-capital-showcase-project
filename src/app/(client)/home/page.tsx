"use client";

import HeroSection from "./content/HeroSection";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const services = [
    {
      title: "Living room",
      description:
        "Stylish updates to enhance comfort and function from flooring and lighting to custom shelves and layouts.",
      image: "/images/cozy-livingroom.JPG",
    },
    {
      title: "Kitchen",
      description:
        "Modern, functional kitchen makeovers with upgraded cabinets, counters, lighting, and smart storage.",
      image: "/images/modern-kitchen.JPG",
    },
    {
      title: "Bed-room",
      description:
        "Create a calm, comfortable space with lighting upgrades, fresh layouts, and built-in wardrobes.",
      image: "/images/cozy-bedroom.JPG",
    },
    {
      title: "Bathroom",
      description:
        "Transform your bathroom with sleek tiling, quality fixtures, walk-in showers, and smart design.",
      image: "/images/bathroom.JPG",
    },
  ];
  const portfolio = [
    { src: "/images/livingroom-pfl.JPG", title: "Modern Living Room" },
    { src: "/images/kitchen-pfl.JPG", title: "Luxury Kitchen" },
    { src: "/images/bedroom.JPG", title: "Cozy Bedroom" },
    { src: "/images/dining-area.JPG", title: "Elegant Dining Area" },
  ];

  return (
    <>
      <HeroSection />
      <section className="py-16 bg-white text-center px-4">
        <h2
          data-aos="fade-up"
          className="text-2xl sm:text-3xl font-bold text-green-800 mb-4"
        >
          What We Can Do For You
        </h2>
        <p data-aos="fade-up" className="max-w-3xl mx-auto text-gray-700 mb-12">
          From small upgrades to full remodels, we handle every detail with care
          and expertise. Our renovation services are tailored to your needs with
          attention to craftsmanship, timelines, and customer satisfaction.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-green-800 font-semibold text-lg">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* <button
          onClick={() => router.push("/services")}
          className="mt-10 bg-green-700 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-2xl shadow"
        >
          View all Services
        </button> */}
      </section>

      <section className="bg-green-50 py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4">
              Who we are
            </h2>
            <p className="text-gray-700 mb-4">
              With over 10 years of renovation experience, we’re a passionate
              team dedicated to quality craftsmanship, honest pricing, and
              satisfied homeowners.
            </p>
            <ul className="text-gray-700 space-y-2 list-disc list-inside">
              <li>Licensed & insured</li>
              <li>10+ Years in Business</li>
              <li>Customer-First Approach</li>
            </ul>
            <button
              onClick={() => router.push("/about")}
              className="mt-6 bg-green-700 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-2xl shadow"
            >
              Read more About Us
            </button>
          </div>
          <div>
            <img
              src="/images/9.JPG"
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4">
          Our Portfolio
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-12">
          Take a look at some of our recent renovation projects.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {portfolio.map((img, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
            >
              <img
                src={img.src}
                alt={`Project ${index + 1}`}
                className="w-full h-56 object-cover transition duration-300 group-hover:blur-sm"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-20 transition duration-500">
                <span className="text-white font-semibold text-lg">
                  {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => router.push("/project")}
          className="bg-green-700 text-white font-semibold mt-8 px-6 py-3 rounded-2xl shadow hover:bg-green-500 transition"
        >
          See full Portfolio
        </button>
      </section>

      {/* Request Quote Section */}
      <section className="py-16 bg-gray-100 text-green-700 text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Ready to Start Your Renovation?
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-8">
          Let’s bring your best vision to life. Get in touch with us today for a
          free.
        </p>
        <button
          onClick={() => router.push("/contact")}
          className="bg-green-700 text-white font-semibold mt-8 px-6 py-3 rounded-2xl shadow hover:bg-green-500 transition"
        >
          Contact us for Renovation
        </button>
      </section>
    </>
  );
}
