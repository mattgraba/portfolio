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
                    <li>TypeScript</li>
                    <li>Python</li>
                    <li>SQL (PostgreSQL)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-gray-300 mb-2">Experienced</p>
                  <ul className="space-y-1 text-gray-200/90">
                    <li>Java</li>
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
                <Wrench className="w-6 h-6 text-blue-400" /> Tools & Tech
              </h2>
              <ul className="space-y-2 text-left">
                <li>React, Next.js, Tailwind, shadcn/ui</li>
                <li>Node.js, Express, Prisma ORM, PostgreSQL</li>
                <li>REST APIs, Domain-Driven Design, JWT Auth</li>
                <li>Docker, Linux, Git, GitHub Actions</li>
                <li>Postman, Jest, Supertest</li>
                <li>OpenAI API, AI-assisted developer tooling</li>
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
                <li>Domain-Driven Design (DDD)</li>
                <li>Layered Architecture (routes → controllers → services → domains → DB)</li>
                <li>System Design & API Architecture</li>
                <li>Authentication & Authorization (JWT, RBAC)</li>
                <li>Data Modeling, ERD Design, SQL Schema Design</li>
                <li>ETL Pipelines & Data Normalization</li>
                <li>Software Design Patterns & Best Practices</li>
                <li>Unit Testing & Quality Assurance</li>
                <li>Technical Writing & System Documentation</li>
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
