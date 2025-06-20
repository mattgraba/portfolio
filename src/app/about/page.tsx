"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code, FolderGit2, Mail } from "lucide-react";
import Link from "next/link";

const TABS = [
  { label: "Skills", path: "/skills", icon: Code },
  { label: "Projects", path: "/projects", icon: FolderGit2 },
  { label: "Contact", path: "/contact", icon: Mail },
];

export default function About() {
  return (
    <main id="main-content" className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/home.jpg"
        alt="Contact background"
        fill
        className="object-cover z-0"
        priority
      />
      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col justify-start items-center z-10 bg-black/40 min-h-full overflow-y-auto pt-8">
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-5xl px-6 py-12"
        >
          <h1 className="text-4xl font-bold text-white">About Me</h1>
          <div className="bg-black/60 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10 text-center text-white mb-6">
            <p className="text-lg">
            Welcome to my portfolio. My name is Matt, and I am a 23-year-old aspiring software engineer with a passion for combining creativity and problem-solving through full-stack development. I am highly self-motivated and dedicated to continuously expanding my technical expertise. I thrive on learning new technologies and actively seek opportunities to gain hands-on experience in innovative environments.
            </p>
          </div>
          <div className="bg-black/60 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10 prose dark:prose-invert max-w-none text-white flex flex-col gap-4 items-center">
            <h2 className="text-2xl font-semibold mt-8">Education</h2>
            <div className="text-left w-full max-w-xl mx-auto">
              <p className="mb-2">
                <strong>University of Minnesota - Twin Cities</strong><br />
                Bachelor&apos;s Degree in Computer Science, December 2024
              </p>
              <p className="mb-2 pl-4">
                <em>Relevant Coursework:</em><br />
                <span className="pl-4 block">Software Engineering, Program Design &amp; Development, Artificial Intelligence,</span>
                <span className="pl-4 block">Advanced Programming Concepts, Algorithms &amp; Data Structures,</span>
                <span className="pl-4 block">Machine Architecture, Computer Architecture, Introduction to Operating Systems</span>
              </p>
            </div>
            <a
              href="/resume/Matthew_Graba_Resume_2025-4.pdf"
              download
              className="mt-2 inline-block px-6 py-2 rounded-lg bg-green-900 hover:bg-green-800 text-white font-semibold shadow transition-all duration-200"
            >
              Download Resume (PDF)
            </a>
          </div>
          <div className="flex flex-wrap gap-10 justify-center mt-10" role="navigation" aria-label="Page navigation">
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
        </motion.section>
      </div>
    </main>
  );
} 