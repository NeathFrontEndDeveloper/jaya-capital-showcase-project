import Image from "next/image";
import { STATIC_CLIENT_REVIEW } from "@/constants/Data";

const Testimonials = () => {
  return (
    <section className="w-full min-h-screen flex items-center flex-col mt-10 md:mt-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl text-center">
        <span className="text-[#666666] uppercase text-xs md:text-base">
          Testimonials
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-[#1F1F1F] mt-2">
          What Our Client Say
        </h1>
        <span className="text-[#666666] text-sm sm:text-base mt-2 md:mt-4 block">
          Don&apos;t just take our word for it. Here&apos;s what our satisfied
          clients have to say about their experience working with us.
        </span>
      </div>

      <div className="container mx-auto max-w-6xl mt-8 md:mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {STATIC_CLIENT_REVIEW.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl p-4 sm:p-6 flex flex-col items-center text-center min-h-[300px] sm:min-h-[350px]"
            >
              {/* heading */}
              <div className="flex items-center justify-between space-x-3 sm:space-x-4 w-full">
                {/* Profile Image */}
                <div className="pt-2 sm:pt-4 flex-shrink-0">
                  <Image
                    src={client.image || "/placeholder-profile.jpg"}
                    alt={`Profile of ${client.name}`}
                    width={50}
                    height={50}
                    className="rounded-full mb-2 sm:mb-4 sm:w-[60px] sm:h-[60px]"
                  />
                </div>

                {/* Name & Position */}
                <div className="flex flex-col text-start flex-1 min-w-0">
                  <h2 className="font-semibold text-base sm:text-lg truncate">
                    {client.name}
                  </h2>
                  <span className="text-xs sm:text-sm text-gray-500 leading-tight">
                    {client.position}/{client.company}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 sm:mt-8 text-start text-sm sm:text-base flex-1">
                {client.description}
              </p>

              {/* Project Info */}
              <div className="mt-4 sm:mt-8 text-xs sm:text-sm text-start w-full pt-4 border-t border-gray-100">
                <p className="font-normal mb-1">
                  <span className="font-medium">Project:</span> {client.project}
                </p>
                <p className="font-normal">
                  <span className="font-medium">Completed:</span>{" "}
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
