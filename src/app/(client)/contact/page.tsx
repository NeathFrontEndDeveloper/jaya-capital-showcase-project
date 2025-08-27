"use client";

// import ContactForm from "./content/contact-form";
// // import ContactInfo from "./content/contact-info";
// import { TEXTS } from "@/constants/color";

// export default function Page() {
//   return (
//     <div className="w-full min-h-screen">
//       <div className="relative z-10 container mx-auto px-4 md:px-6 py-12 lg:py-16">
//         {/* Enhanced header section */}
//         <div className="text-center mb-12 lg:mb-16">
//           <h1
//             className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold ${TEXTS}`}
//           >
//             Get in Touch
//           </h1>

//           <span className="flex flex-col space-y-1">
//             <p className="text-gray-500 text-sm md:text-base lg:text-md max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
//               Have a project in mind?
//             </p>
//             <p className="text-gray-500 text-sm md:text-base lg:text-md max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
//               Let&apos;s talk about how we can transform your space into
//               something exceptional.
//             </p>
//           </span>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
//           {/* Enhanced Contact Form */}
//           <div className="flex-1 group">
//             <div className="relative">
//               {/* Form container */}
//               <div className="relative border border-[#666666] p-6 lg:p-8 rounded-xl bg-white transition-all duration-300 hover:border-[#666666]/40 hover:shadow-2xl hover:shadow-[#666666]/20">
//                 <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#666666] to-transparent"></div>
//                 <ContactForm />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import ContactForm from "./content/contact-form";
import { TEXTS } from "@/constants/color";

export default function Page() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-12 lg:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-3xl sm:text-5xl md:text-6xl font-bold ${TEXTS}`}>
            Get in Touch
          </h1>

          <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Let&apos;s talk about how we can transform
            your space into something exceptional.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="relative border border-gray-300 p-6 lg:p-8 rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
