import Image from "next/image";
import { STATIC_CLIENT_REVIEW } from "@/constants/Data";

const Testimonials = () => {
  return (
    <section className="w-full h-screen flex items-center flex-col mt-20">
      <div className="w-full max-w-2xl text-center">
        <span className="text-[#666666] uppercase">Testimonials</span>
        <h1 className="text-4xl font-bold text-[#1F1F1F]">
          What Our Client Say
        </h1>
        <span className="text-[#666666]">
          Don't just take our word for it. Here's what our satisfied clients
          have to say about their experience working with us.
        </span>
      </div>

      <div className="container mx-auto max-w-6xl mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 space-x-6">
          {STATIC_CLIENT_REVIEW.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl p-4 flex flex-col items-center text-center "
            >
              {/* heading */}
              <div className="flex items-center justify-between space-x-4">
                {/* Profile Image */}
                <Image
                  src={client.image || "/placeholder-profile.jpg"}
                  // src={Demo}
                  alt={`Profile of ${client.name}`}
                  width={60}
                  height={60}
                  className="rounded-full mb-4"
                />

                {/* Name & Position */}
                <span className="flex flex-col text-start">
                  <h2 className="font-semibold text-lg">{client.name}</h2>
                  <span className="text-xs text-gray-500">
                    {client.position}/{client.company}
                  </span>
                </span>
              </div>

              {/* Description */}
              <p className="mt-8 text-gray-700 text-start">
                {client.description}
              </p>

              {/* Project Info */}
              <div className="mt-8 text-sm text-gray-600 text-start w-full">
                <p>
                  <span className="font-semibold">Project:</span>{" "}
                  {client.project}
                </p>
                <p>
                  <span className="font-semibold">Completed:</span>{" "}
                  {client.complete}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
