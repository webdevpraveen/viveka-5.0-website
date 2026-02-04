"use client";

import { HeroParallax } from "./ui/hero-parallax";

const events = [
  { title: "Laser Light Show", link: "/events", thumbnail: "/laser-show-opt.webp" },
  { title: "Drone Racing", link: "/events", thumbnail: "/drone-race-xs.webp" },
  { title: "Robo War", link: "/events", thumbnail: "/robo-war-xs.webp" },
  { title: "Robo Football", link: "/events", thumbnail: "/robo-football-xs.webp" },
  { title: "Digi Art", link: "/events", thumbnail: "/digi-art-xs.webp" },
  { title: "CodeX", link: "/events", thumbnail: "/codex-xs.webp" },
  { title: "Hackathon", link: "/events", thumbnail: "/hackathon-xs.webp" },
  { title: "Gaming Arena", link: "/events", thumbnail: "/gaming-arena-xs.webp" },
  { title: "Structromania", link: "/events", thumbnail: "/structromania-xs.webp" },
  { title: "AI Workshop", link: "/events", thumbnail: "/ai-workshop-xs.webp" },
  { title: "Cyber Security", link: "/events", thumbnail: "/cyber-security-xs.webp" },
  { title: "Boat Race", link: "/events", thumbnail: "/boat-race-xs.webp" },
];

export default function Hero() {
  return (
    <section className="relative w-full bg-[#020617] dark:bg-[#020617]">
      <HeroParallax products={events} />
    </section>
  );
}
