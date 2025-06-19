"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { User, Code, FolderGit2, Mail, Github, Linkedin } from "lucide-react";

const TABS = [
  { label: "About", path: "/about", icon: User },
  { label: "Skills", path: "/skills", icon: Code },
  { label: "Projects", path: "/projects", icon: FolderGit2 },
  { label: "Contact", path: "/contact", icon: Mail },
];

export default function Home() {
  const router = useRouter();

  return (
    <main className="relative w-full min-h-screen overflow-hidden">
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
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg tracking-tight">
          Matt Graba <span className="text-green-400">| Software Engineer Portfolio</span>
        </h1>
        {/* Social Icons */}
        <div className="flex gap-6 mb-8">
          <a
            href="https://github.com/mattgraba"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-green-400 transition-colors"
          >
            <Github className="w-8 h-8 md:w-10 md:h-10" />
          </a>
          <a
            href="https://linkedin.com/in/matthew-graba-698266238"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-green-400 transition-colors"
          >
            <Linkedin className="w-8 h-8 md:w-10 md:h-10" />
          </a>
        </div>
        <div className="flex flex-wrap gap-10 justify-center">
          {TABS.map((tab) => (
            <button
              key={tab.path}
              onClick={() => router.push(tab.path)}
              className="flex flex-col items-center px-8 py-6 rounded-xl bg-white/20 hover:bg-white/40 text-xl text-white font-semibold shadow-lg backdrop-blur transition-all duration-200 min-w-[120px]"
            >
              <tab.icon className="w-12 h-12 mb-3 text-green-400" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
