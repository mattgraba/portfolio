"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: "Advanced" },
        { name: "Next.js", level: "Intermediate" },
        { name: "HTML/CSS", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
      ]
    },
    {
      title: "UI/UX & Design",
      skills: [
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "Figma", level: "Intermediate" },
        { name: "Responsive Design", level: "Advanced" },
        { name: "UI/UX Principles", level: "Intermediate" },
      ]
    },
    {
      title: "Backend & Tools",
      skills: [
        { name: "Node.js", level: "Intermediate" },
        { name: "Git", level: "Intermediate" },
        { name: "REST APIs", level: "Intermediate" },
      ]
    }
  ];

  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h1 className="text-4xl font-bold text-primary">Technical Skills</h1>
        <p className="text-lg text-muted-foreground">
          Here&apos;s a detailed overview of my technical capabilities and expertise levels.
        </p>
      </motion.section>

      <div className="grid gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {category.skills.map((skill) => (
                <Card key={skill.name}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
} 