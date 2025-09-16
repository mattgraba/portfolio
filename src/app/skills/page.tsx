"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { User, FolderGit2, Mail, Code, Wrench, Lightbulb } from "lucide-react";
import Link from "next/link";

const TABS = [
  { label: "About", path: "/about", icon: User },
  { label: "Projects", path: "/projects", icon: FolderGit2 },
  { label: "Contact", path: "/contact", icon: Mail },
];

export default function Skills() {
  return (
    <main id="main-content" className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/home.jpg"
        alt="Skills background"
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
          className="space-y-6 max-w-5xl px-6 py-12 text-center"
        >
          <h1 className="text-4xl font-bold text-white mb-8">Technical Skills</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            {/* Languages */}
            <motion.div 
              whileHover={{ scale: 1.03 }} 
              className="bg-black/60 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10"
            >
              <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
                <Code className="w-6 h-6 text-green-400" /> Languages
              </h2>
              <div className="grid grid-cols-2 gap-6 text-left">
                <div>
                  <p className="font-bold text-green-400 mb-2">Primary</p>
                  <ul className="space-y-1">
                    <li>Java</li>
                    <li>Python</li>
                    <li>JavaScript (ES6+)</li>
                    <li>SQL</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-gray-300 mb-2">Experienced</p>
                  <ul className="space-y-1 text-gray-200/90">
                    <li>C</li>
                    <li>C++</li>
                    <li>C#</li>
                    <li>OCaml</li>
                    <li>Assembly</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Tools & Technologies */}
            <motion.div 
              whileHover={{ scale: 1.03 }} 
              className="bg-black/60 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10"
            >
              <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
                <Wrench className="w-6 h-6 text-blue-400" /> Tools & Technologies
              </h2>
              <ul className="space-y-2 text-left">
                <li>React, Node.js, Express, MongoDB</li>
                <li>REST APIs, JWT Authentication</li>
                <li>Git, Docker, Linux</li>
                <li>Postman, JUnit</li>
              </ul>
            </motion.div>

            {/* Concepts */}
            <motion.div 
              whileHover={{ scale: 1.03 }} 
              className="bg-black/60 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10"
            >
              <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
                <Lightbulb className="w-6 h-6 text-yellow-400" /> Concepts
              </h2>
              <ul className="space-y-2 text-left">
                <li>Object-Oriented Design</li>
                <li>Client-Server Architecture</li>
                <li>Software Design Patterns</li>
                <li>System Design & SDLC</li>
                <li>Unit Testing & QA</li>
                <li>System & Process Documentation</li>
              </ul>
            </motion.div>
          </div>

          {/* Navigation Tabs */}
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
