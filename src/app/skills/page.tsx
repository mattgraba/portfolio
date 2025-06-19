"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/home.jpg"
        alt="Skills background"
        fill
        className="object-cover z-0"
        priority
      />
      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/40 min-h-screen">
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-3xl px-6 py-12 text-center"
        >
          <h1 className="text-4xl font-bold text-white mb-8">Technical Skills</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="bg-black/60 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10">
              <h2 className="text-2xl font-semibold mb-4">Languages</h2>
              <ul className="space-y-2">
                <li>Java</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>C</li>
                <li>C++</li>
                <li>C#</li>
                <li>OCaml</li>
                <li>Assembly</li>
              </ul>
            </div>
            <div className="bg-black/60 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10">
              <h2 className="text-2xl font-semibold mb-4">Tools & Technologies</h2>
              <ul className="space-y-2">
                <li>Git</li>
                <li>Docker</li>
                <li>Linux</li>
                <li>REST APIs</li>
                <li>Agile (Scrum)</li>
                <li>UML</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>JUnit</li>
                <li>Postman</li>
              </ul>
            </div>
            <div className="bg-black/60 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10">
              <h2 className="text-2xl font-semibold mb-4">Concepts</h2>
              <ul className="space-y-2">
                <li>Object-Oriented Design</li>
                <li>Relational Databases</li>
                <li>Client-Server Architecture</li>
                <li>Software Design Patterns (Observer, Decorator)</li>
                <li>Agile Development</li>
                <li>SDLC</li>
                <li>Unit Testing</li>
              </ul>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
} 