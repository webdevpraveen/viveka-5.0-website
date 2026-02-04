"use client";

import { HeroParallax } from "./ui/hero-parallax";

const events = [
  { title: "Laser Light Show", link: "/events", thumbnail: "/laser-show-opt.webp" },
  { title: "Drone Racing", link: "/events", thumbnail: "/drone-race-mobile-v2.jpg" },
  { title: "Robo War", link: "/events", thumbnail: "/robowar.jpeg" },
  { title: "Robo Football", link: "/events", thumbnail: "/robosoccer.JPG" },
  { title: "Digi Art", link: "/events", thumbnail: "/digiart.png" },
  { title: "CodeX", link: "/events", thumbnail: "/codex.webp" },
  { title: "Hackathon", link: "/events", thumbnail: "/hackathon.webp" },
  { title: "Gaming Arena", link: "/events", thumbnail: "/gamingareana.jpg" },
  { title: "Structomania", link: "/events", thumbnail: "/structomania.JPG" },
  { title: "AI Showcase", link: "/events", thumbnail: "/aishowcase.JPG" },
  { title: "Cyber Security", link: "/events", thumbnail: "/cybersecurity.JPG" },
  { title: "Boat Race", link: "/events", thumbnail: "/boatrace.JPG" },
];

export default function Hero() {
  return (
    <section className="relative w-full bg-[#020617] dark:bg-[#020617]">
      <HeroParallax products={events} />
    </section>
  );
}
