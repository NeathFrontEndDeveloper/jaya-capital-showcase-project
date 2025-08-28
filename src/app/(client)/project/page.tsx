"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Project {
  id: number;
  attributes?: {
    title?: string;
    description?: string;
    image_before_after?: {
      data?: {
        attributes?: {
          url?: string;
        };
      };
    };
  };
  title?: string;
  description?: string;
  image_before_after?: string;
}

export default function Page() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          "https://tidy-surprise-1fc43a43c4.strapiapp.com/api/portfolios"
        );
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data = await res.json();
        console.log("API response:", data);

        if (Array.isArray(data)) {
          setProjects(data);
        } else if (Array.isArray(data.data)) {
          setProjects(data.data);
        } else {
          setProjects([]);
        }
      } catch (err) {
        console.error("Error fetching projects:", err);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="bg-[#F9F9F9] w-full">
      {/* Hero Section */}
      <section
        className="relative h-[250px] sm:h-[300px] md:h-[400px] bg-center text-white"
        style={{
          backgroundImage: "url('/images/Rectangle 120.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center px-4 sm:px-8">
          <p className="bg-green-500/10 text-lg sm:text-2xl md:text-3xl p-3 sm:p-4 rounded-md max-w-2xl text-white font-semibold backdrop-blur-sm">
            Before and After: Transformations to{" "}
            <br className="hidden sm:block" />
            inspire your home project
          </p>
        </div>
      </section>

      {/* Text and Video Details */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 mx-5">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl text-green-700">
            Project highlights
          </h1>
          <ul className="list-disc list-inside text-gray-700 text-base sm:text-lg space-y-2 mt-3">
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

        <div>
          <video
            src="/videos/GregMoHouse64.mp4"
            controls
            autoPlay
            loop
            muted
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>

      {/* Project Portfolio Section */}
      <section className="px-4 text-center mt-8 md:mt-10">
        <h1 className="text-green-700 text-2xl sm:text-3xl font-bold">
          Project Portfolio
        </h1>
        <p className="font-semibold text-gray-700 text-base sm:text-lg mt-3">
          Experience how we turned outdated homes into functional, modern
          <br className="hidden sm:block" />
          living spaces—with clean design and smart planning.
        </p>
        <p className="font-semibold text-gray-700 text-base sm:text-lg mt-5">
          Before & After: See the Transformation
        </p>
      </section>

      {/* Projects Grid */}
      <section className="py-10 px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {loading ? (
          <p className="text-center text-gray-600">Loading projects...</p>
        ) : projects.length === 0 ? (
          <p className="text-center text-red-500">No projects found</p>
        ) : (
          projects.map((project: Project) => {
            const title =
              project.attributes?.title ?? project.title ?? "Untitled Project";
            const description =
              project.attributes?.description ?? project.description ?? "";
            let beforeImage =
              project.attributes?.image_before_after?.data?.attributes?.url ??
              project.image_before_after ??
              "/images/b-a1.jpg"; // default fallback

            return (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-[1.01] animate-fadeIn"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Before Image */}
                  <div className="relative w-full h-64 md:h-auto">
                    <Image
                      src={beforeImage}
                      alt={title}
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Description */}
                  <div className="p-4 flex flex-col justify-center">
                    <h1 className="font-semibold text-center md:text-left text-lg sm:text-xl md:text-2xl">
                      {title}
                    </h1>
                    <p className="mt-3 text-sm sm:text-base text-gray-700">
                      {description}
                    </p>
                    <div className="flex justify-center md:justify-start mt-5">
                      <button
                        onClick={() => (window.location.href = "/details")}
                        className="inline-block border-2 border-green-600 text-black font-semibold text-sm sm:text-base px-4 py-2 rounded hover:bg-green-600 hover:text-white transition duration-300 cursor-pointer"
                      >
                        See more of this Home
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
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
    </div>
  );
}
