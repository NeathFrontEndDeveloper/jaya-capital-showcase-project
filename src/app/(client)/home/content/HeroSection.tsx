"use client";

import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/contact"); // navigate to Contact page
  };

  const handleMoreInfoClick = () => {
    router.push("/about"); // navigate to About page
  };

  return (
    <section className="relative h-[600px] w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0.3)), url('/images/hero-section.JPG')",
        }}
      ></div>

      {/* Overlay content */}
      <div className="relative max-w-6xl mx-auto h-full flex flex-col justify-center px-6 sm:px-12 lg:px-20 text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl">
          Transform <span className="font-bold text-green-700">Your Home</span>{" "}
          <br />
          with{" "}
          <span className="font-bold text-green-700">Expert Renovation </span>
          <br /> Service
        </h1>

        <p className="mt-4 max-w-xl text-white/80 text-lg">
          We specialize in high-quality kitchen, bathroom, and interior
          renovations that match your lifestyle and budget.
        </p>

        <div className="mt-8 flex space-x-4">
          <button
            onClick={handleMoreInfoClick}
            className="bg-white text-green-800 font-semibold px-6 py-2 rounded-2xl shadow hover:bg-green-500 hover:text-white transition"
          >
            More Info
          </button>
          <button
            onClick={handleContactClick}
            className="bg-green-800 hover:bg-green-500 text-white font-semibold px-6 py-2 rounded-2xl shadow transition"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
