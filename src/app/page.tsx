"use client";

import Image from "next/image";
import Link from "next/link";
import { User, Code, FolderGit2, Mail } from "lucide-react";

const TABS = [
  { label: "About", path: "/about", icon: User },
  { label: "Skills", path: "/skills", icon: Code },
  { label: "Projects", path: "/projects", icon: FolderGit2 },
  { label: "Contact", path: "/contact", icon: Mail },
];

export default function Home() {

  return (
    <main id="main-content" className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/home.jpg"
        alt="Abstract tech background"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-black/40 min-h-screen">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-14 drop-shadow-lg tracking-tight">
          Matt Graba <span className="text-green-400">| Dev Portfolio</span>
        </h1>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-10 justify-center" role="navigation" aria-label="Main navigation">
          {TABS.map((tab) => (
            <Link
              key={tab.path}
              href={tab.path}
              className="flex flex-col items-center px-8 py-6 rounded-xl bg-white/20 hover:bg-white/40 text-xl text-white font-semibold shadow-lg backdrop-blur transition-all duration-200 min-w-[120px]"
              aria-label={`Navigate to ${tab.label} page`}
            >
              <tab.icon className="w-12 h-12 mb-3 text-green-400" aria-hidden="true" />
              <span>{tab.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
