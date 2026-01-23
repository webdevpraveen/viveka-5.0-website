"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "SRMU: The Foundation",
    description: (
      <>
        <p className="mb-4">
            <strong className="text-neon-cyan">Shri Ramswaroop Memorial University (SRMU)</strong> stands as a beacon of excellence in education and research. Founded with a vision to create ethical professionals, it offers a diverse range of programs across multiple disciplines.
        </p>
        <p>
            With the motto <em>"Chase Reality…Dreams Will Follow"</em>, SRMU creates an ecosystem where academic rigour meets holistic development, fostering the leaders of tomorrow.
        </p>
      </>
    ),
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/srmu.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="SRMU Campus"
        />
      </div>
    ),
  },
  {
    title: "Viveka 5.0: The Intelligence",
    description: (
      <>
        <p className="mb-4">
           The 5th iteration of SRMU's flagship Techno-Cultural Fest. <strong>Viveka</strong> is not just an event; it's a movement. A convergence of code, creativity, and culture.
        </p>
        <p>
            Under the theme <span className="text-neon-cyan">"The Intelligence"</span>, we explore the frontiers of AI, Robotics, and human ingenuity. It is a platform for students to innovate, compete, and showcase their brilliance on a grand stage.
        </p>
      </>
    ),
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white p-4 bg-black/50">
        <Image
          src="/logo.png"
          width={300}
          height={300}
          className="h-auto w-full object-contain"
          alt="Viveka Logo"
        />
      </div>
    ),
  },
  {
    title: "The Vision",
    description: (
      <>
        <p className="mb-4">
            To ignite the spark of innovation in every student. We believe in learning beyond the classroom, where practical application meets theoretical knowledge.
        </p>
        <p>
            Join us on <strong>6th & 7th February 2025</strong> as we celebrate technology, art, and the spirit of competition. The future is here, and it begins with you.
        </p>
      </>
    ),
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <div className="text-6xl font-bold font-space-grotesk text-neon-cyan">
             2025
        </div>
      </div>
    ),
  },
];

export default function About() {
  return (
    <section className="py-20 bg-[#020617] overflow-hidden" id="about">
      <div className="container mx-auto px-4 mb-10 text-center">
         <h2 className="text-4xl md:text-5xl font-bold text-white font-space-grotesk mb-4">
             Discover <span className="text-neon-cyan">The Legacy</span>
         </h2>
         <p className="text-gray-400 max-w-2xl mx-auto">
             From a premier university to a premier technical festival. Scroll to explore our journey.
         </p>
      </div>
      
      <StickyScroll content={content} />
    </section>
  );
}
