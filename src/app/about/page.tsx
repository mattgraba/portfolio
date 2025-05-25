"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-8">
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h1 className="text-4xl font-bold text-primary">About Me</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg">
            Hey! I&apos;m Matt, a 23-year-old developer who believes in the perfect blend of form and function. 
            When I&apos;m not crafting code, you might find me [Your interests/hobbies here].
          </p>
          
          <h2 className="text-2xl font-semibold mt-8">My Journey</h2>
          <p>
            [Your background, education, and what led you to development]
          </p>

          <h2 className="text-2xl font-semibold mt-8">What Drives Me</h2>
          <p>
            [Your motivations, goals, and what you're passionate about in tech]
          </p>
        </div>
      </motion.section>
    </main>
  );
} 