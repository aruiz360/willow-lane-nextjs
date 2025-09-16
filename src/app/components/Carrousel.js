"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

export default function Carrousel({title, slides}) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <span>
      {title && (
        <h2 className="text-heading-mobile md:text-heading-lg font-haboro text-primary mb-4 text-center py-5 pt-10">
          {title.toUpperCase()}
        </h2>
      )}

      <div className="relative w-full mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 bg-white"
          >
            <div className="relative">
              <Image
                src={slides[current].image}
                alt={slides[current].title}
                width={800}
                height={314}
                className="object-cover"
              />
            </div>

            <div className="p-6 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-800">{slides[current].title}</h2>
              <p className="text-gray-600 mt-2">{slides[current].description}</p>
              <a
                href={slides[current].link}
                target="_blank"
                className="mt-4 text-primary font-semibold hover:underline"
              >
                Learn More →
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        {slides.length > 1 && (
          <>
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 -translate-y-1/2 left-4 bg-white/70 hover:bg-white p-2 rounded-full shadow"
            >
              <ChevronLeftIcon className="w-5 h-5 text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 -translate-y-1/2 right-4 bg-white/70 hover:bg-white p-2 rounded-full shadow"
            >
              <ChevronRightIcon className="w-5 h-5 text-gray-800" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full ${
                    current === index ? "bg-primary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </span>
  );
}
