"use client";

import { HeroParallax } from "./ui/hero-parallax";

const events = [
  { title: "Recall-O-Tune", link: "/events", thumbnail: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop" },
  { title: "CodeX", link: "/events", thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" },
  { title: "Robo Football", link: "/events", thumbnail: "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?q=80&w=1926&auto=format&fit=crop" },
  { title: "Robo War", link: "/events", thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop" },
  { title: "Free Fire", link: "/events", thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" },
  { title: "BGMI", link: "/events", thumbnail: "https://images.unsplash.com/photo-1593305841991-05c29736f87e?q=80&w=2070&auto=format&fit=crop" },
  { title: "Robo Race", link: "/events", thumbnail: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop" },
  { title: "Drone Racing", link: "/events", thumbnail: "https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=1974&auto=format&fit=crop" },
  { title: "Reasoning Rumble", link: "/events", thumbnail: "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?q=80&w=2070&auto=format&fit=crop" },
  { title: "Boat Race", link: "/events", thumbnail: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop" },
  { title: "Find The Language", link: "/events", thumbnail: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop" },
  { title: "Hack-A-Thon", link: "/events", thumbnail: "https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=1974&auto=format&fit=crop" },
  { title: "Digi Art", link: "/events", thumbnail: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop" },
  { title: "Path Finder", link: "/events", thumbnail: "https://images.unsplash.com/photo-1535378437327-b7149236addf?q=80&w=2071&auto=format&fit=crop" },
  { title: "Laser Light Show", link: "/events", thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1974&auto=format&fit=crop" },
];

export default function Hero() {
  return (
    <section className="relative w-full bg-[#020617] dark:bg-[#020617]">
      <HeroParallax products={events} />
    </section>
  );
}
