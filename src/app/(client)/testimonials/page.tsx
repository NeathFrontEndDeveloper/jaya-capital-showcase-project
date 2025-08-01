"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechFlow Inc.",
    content:
      "Working with this team has been transformative for our business. Their attention to detail and innovative solutions exceeded our expectations. The ROI we've seen is remarkable.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616c89507e4?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder & CEO",
    company: "StartupHub",
    content:
      "The level of professionalism and expertise is unmatched. They delivered our project on time and within budget, while maintaining the highest quality standards.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "InnovateCorp",
    content:
      "Their strategic approach and deep understanding of our industry helped us launch successfully. The collaboration was seamless and the results speak for themselves.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Operations Director",
    company: "Global Solutions",
    content:
      "Exceptional service from start to finish. The team's ability to adapt to our changing requirements while maintaining quality was impressive. Highly recommended.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "CTO",
    company: "FutureTech",
    content:
      "Outstanding technical expertise and customer service. They not only met our requirements but provided valuable insights that improved our overall strategy.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Business Owner",
    company: "Wilson Enterprises",
    content:
      "The transformation of our digital presence has been incredible. Our engagement rates have tripled, and we've seen a significant increase in conversions.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
  },
];

const TestimonialsPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToTestimonial = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <StarIcon
        key={i}
        className={`h-5 w-5 ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about their experience working with us.
          </p>
        </div>

        {/* Featured Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-100 to-blue-100 rounded-full transform -translate-x-12 translate-y-12"></div>

            <div
              className={`relative transition-all duration-300 ${
                isAnimating
                  ? "opacity-0 transform translate-y-4"
                  : "opacity-100 transform translate-y-0"
              }`}
            >
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    {/* <Image
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    /> */}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-gray-500">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {renderStars(testimonials[currentIndex].rating)}
              </div>

              <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
                "{testimonials[currentIndex].content}"
              </blockquote>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                disabled={isAnimating}
              >
                <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentIndex
                        ? "bg-blue-600 w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    disabled={isAnimating}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                disabled={isAnimating}
              >
                <ChevronRightIcon className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                index === currentIndex
                  ? "ring-2 ring-blue-500 ring-opacity-50"
                  : ""
              }`}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-gray-200">
                  {/* <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  /> */}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-blue-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-3">{renderStars(testimonial.rating)}</div>

              <p className="text-gray-700 leading-relaxed text-sm">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's work together to achieve exceptional results for your
              business.
            </p>
            <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
