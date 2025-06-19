"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "AI Dev Debugging Assistant Tool",
      description: "Full Stack SaaS | Java, JavaScript, React, Express, MongoDB. Lead developer of a full-stack debugging assistant tool to help developers troubleshoot errors using NLP-based AI. Built backend with Express/Node.js and RESTful APIs. Developed React frontend with real-time form handling. Integrated MongoDB for error storage and retrieval. Practiced Agile, unit testing, and Docker deployment.",
      technologies: ["Java", "JavaScript", "React", "Express", "MongoDB", "Node.js", "Docker", "Agile", "Jest", "Postman"],
      github: "https://github.com/mattgraba/dev-helper-ai",
      live: "",
      image: ""
    },
    {
      title: "Voting Software System",
      description: "Java, Agile Scrum, GUI. Collaborated in a team using Agile Scrum to develop an extensible voting system for multiple election types. Created product backlog and contributed to sprint planning. Developed user-friendly GUI and results table.",
      technologies: ["Java", "Agile", "Scrum", "GUI"],
      github: "",
      live: "",
      image: ""
    },
    {
      title: "Drone Package Delivery Simulation",
      description: "C++, Docker, UML, Design Patterns. Simulated a drone delivery system using Observer and Decorator patterns for modular design. Integrated battery management and theft prevention. Collaborated on GitHub and deployed via Docker. Designed UML diagrams and wrote unit tests.",
      technologies: ["C++", "Docker", "UML", "Design Patterns", "Unit Testing", "GitHub"],
      github: "",
      live: "",
      image: ""
    },
  ];

  return (
    <main className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/home.jpg"
        alt="Projects background"
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
          <h1 className="text-4xl font-bold text-white mb-8">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary/10 rounded-md text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
} 