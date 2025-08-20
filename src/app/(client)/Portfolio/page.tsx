"use client";
import { Button } from "@/components/ui/button";
import { Description } from "@radix-ui/react-dialog";
import { Hand, Link } from "lucide-react";
import Image from "next/image";
import { before } from "node:test";
import { property, string } from "zod";

export default function PortfolioHero() {
  const projects = [
    {
      before: "/images/1.jpg",
      after: "/images/2.jpg",
      description:
        "Designing up and out added a much needed room upstairs and space for outdoor relaxing.",
    },
    {
      before: "/images/3.jpg",
      after: "/images/4.jpg",
      description:
        "Designing up and out added a much needed room upstairs and space for outdoor relaxing.",
    },
    {
      before: "/images/5.jpg",
      after: "/images/6.jpg",
      description:
        "Designing up and out added a much needed room upstairs and space for outdoor relaxing.",
    },
    {
      before: "/images/7.jpg",
      after: "/images/8.jpg",
      description:
        "Designing up and out added a much needed room upstairs and space for outdoor relaxing.",
    },
  ];

  const picture = [
    {
      before: "/image/9.jpg",
      after: "/image/10.jgp",
      string: "Tallored ranch remodel",
      property:
        "The new owner of this 1950s ranch wanted to update the home with modern features and accessibility for aging in place. Our redesign reconfigured the interior and includes zero-threshold entries, a curbless shower, and wider doors. The renovation also corrected previous DIY errors and improved the home’s functionality and style to meet the owner’s long-term needs.",
    },
  ];

  return (
    <div className="bg-[#F9F9F9] w-full">
      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-center text-white "
        style={{
          backgroundImage: "url('/images/Rectangle 120.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full flex items-center px-8">
          <p className="bg-green-500/10 text-3xl p-4 rounded-md max-w-2xl text-white font-semibold backdrop-blur-sm">
            Before and After: Transformations to <br />
            inspire your home project
          </p>
        </div>
      </section>

      {/* Text Section */}
      <section>
        <div className="mt-5 justify-center items-center">
          <h1 className="text-green-700 text-center text-3xl font-bold">
            Project Portfolio
          </h1>
          <p className="font-semibold text-center text-lg mt-3">
            Experience how we turned outdated homes into functional, modern
            <br />
            living spaces—with clean design and smart planning.
          </p>
          <p className="font-semibold text-center text-lg mt-5">
            Before & After: See the Transformation
          </p>
        </div>
      </section>

      {/* Card Section */}
      <section className="py-10 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-[1.01] "
          >
            <div className="grid grid-cols-2">
              {/* Before Image */}
              <div className="relative">
                <Image
                  src={project.before}
                  alt="Before renovation"
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
                <span className="absolute bottom-2 left-2 bg-black/50 text-white text-sm px-2 py-1 rounded">
                  Before
                </span>
              </div>

              {/* After Image */}
              <div className="relative">
                <Image
                  src={project.after}
                  alt="After renovation"
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
                <span className="absolute bottom-2 left-2 bg-black/50 text-white text-sm px-2 py-1 rounded">
                  After
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="p-4">
              <p className="text-gray-700 text-sm font-medium">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>

      {/*text*/}
      <div>
        <h1 className="text-green-700  text-3xl font-bold">
          Designing home remodels to <br /> fit your future 
        </h1>
        <p className="font-semibold text-lg mt-3">
          Redesigning homes to adapt for the future means adding comfort <br />
          and flexibility for aging in place. We focus our remodels on making{" "}
          <br /> your home fit your future with space to create many more <br />{" "}
          memories.
        </p>
      </div>
    </div>
  );
}
