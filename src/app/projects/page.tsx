"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { User, Code, Mail } from "lucide-react";
import Link from "next/link";
import { event } from "../../lib/ga";

const TABS = [
  { label: "About", path: "/about", icon: User },
  { label: "Skills", path: "/skills", icon: Code },
  { label: "Contact", path: "/contact", icon: Mail },
];

export default function Projects() {

  const trackProjectClick = (label: string) => {
    event({
      action: "click_project",
      category: "projects",
      label,
    });
  };

  const trackTabClick = (label: string) => {
    event({
      action: "click_tab",
      category: "navigation",
      label,
    });
  };

  const projects = [
    {
      id: "dev-helper",
      title: (
        <>
          Dev Helper
          <br />
          Full-Stack Debugging Assistant
        </>
      ),
      description: "Designed and led development of an AI-powered debugging assistant that streamlines error resolution directly from the terminal or browser.",
      bullets: [
        "Built modular CLI + web interface → developers can submit code errors via command line or UI.",
        "Engineered Express backend with JWT-secured APIs → forwards errors to OpenAI, validates responses, and enforces authentication.",
        "Integrated MongoDB for per-user error history, enabling searchable, persistent debugging logs.",
        "Ensured production readiness → layered schema validation, token-secured CLI commands, and Dockerized deployment.",
        "Tested reliability with Jest unit tests and Postman integration flows."
      ],
      impact: "Reduced debugging time by providing AI-generated explanations and fixes within existing developer workflows.",
      technologies: ["JavaScript", "React", "Express", "MongoDB", "Node.js", "Docker", "Jest", "Postman"],
      github: "https://github.com/mattgraba/dev-helper",
      live: "",
      image: ""
    },
    {
      id: "peak-fantasy",
      title: (
        <>
          PEAK Fantasy
          <br />
          Advanced NBA Fantasy Analytics Platform (Startup Project)
        </>
      ),
      description:
        "A full-stack fantasy basketball platform built from the ground up, combining advanced analytics, real-time ETL pipelines, custom scoring engines, and domain-driven backend architecture. Designed as a long-term startup concept aimed at delivering a modern fantasy experience beyond traditional platforms.",
      bullets: [
        "Engineered a domain-driven backend architecture using Node.js/Express, Prisma, and PostgreSQL — with clearly separated domains for Players, Stats, Users, Leagues, and Scoring.",
        "Built ingestion pipelines (ETL) to normalize player identity + season stats from multiple data providers into a unified internal schema.",
        "Developed a configurable scoring engine allowing leagues to define custom scoring models, modifiers, and computation logic.",
        "Designed scalable relationships via ERDs, making the system extensible for future league types, multi-tenant hosting, and advanced tournament modes.",
        "Implemented secure authentication (JWT), role management, layered validation, and upcoming admin UI for commissioner controls.",
        "Established a long-term product roadmap including: coach drafting, advanced realism metrics, fatigue/momentum modeling, and predictive analytics."
      ],
      impact:
        "Sets the foundation for a modern, analytics-driven fantasy ecosystem — merging NBA data pipelines with customizable league mechanics and a scalable backend foundation.",
      technologies: [
        "TypeScript",
        "Node.js",
        "Express",
        "Prisma",
        "PostgreSQL",
        "Zod",
        "Docker",
        "React",
        "Next.js",
        "Tailwind",
        "OpenAI API"
      ],
      github: "https://github.com/mattgraba/peak-fantasy-public",
      live: "",
      image: ""
    },
    {
      id: "drone-package-delivery-simulation",
      title: (
        <>
          Drone Package Delivery Simulation
          <br />
          C++ Distributed Systems Project
        </>
      ),
      description:
        "C++ simulation of a drone delivery system leveraging design patterns and modular architecture to model real-world logistics challenges.",
      bullets: [
        "Implemented core system in C++ using **Observer** and **Decorator** patterns for modularity and extensibility.",
        "Integrated **battery management system** to optimize drone flight paths and ensure energy efficiency.",
        "Designed **theft-prevention module** to simulate package security during deliveries.",
        "Created **UML diagrams** to document system design and communication between modules.",
        "Developed **unit tests** to validate core features and deployed containerized builds with Docker.",
        "Collaborated via GitHub using Agile-style task breakdown and version control workflows."
      ],
      impact:
        "Delivered a realistic, extensible simulation of drone-based logistics, demonstrating the application of software design patterns, modular architecture, and testing in a systems-focused project.",
      technologies: [
        "C++",
        "Docker",
        "UML",
        "Design Patterns",
        "Unit Testing",
        "GitHub"
      ],
      github: "https://github.com/mattgraba/Drone-Package-Delivery-Simulation",
      live: "",
      image: ""
    },
  ];

  return (
    <main id="main-content" className="relative w-full min-h-screen overflow-hidden">
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
          <h1 className="text-4xl font-bold text-white mb-4">Featured Projects</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            A selection of my work spanning <strong>full-stack SaaS platforms</strong>, 
            <strong> compliance systems</strong>, and <strong>systems-level simulations</strong>. 
            Each project emphasizes production-grade practices—APIs with validation & security, 
            audit logging, containerization, and testing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 text-left">
                    {/* Bullets */}
                    {project.bullets && (
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {project.bullets.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    )}

                    {/* Impact */}
                    {project.impact && (
                      <p className="text-sm font-semibold text-green-400">
                        Impact: {project.impact}
                      </p>
                    )}

                    {/* Technologies */}
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

                    {/* Actions with GA tracking */}
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => trackProjectClick(project.id)}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                      {project.live && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* Closing Sentence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-8"
          >
            <p className="text-white text-lg">
              Note: Additional completed projects will be added soon.
            </p>
          </motion.div>
          
          {/* Navigation Tabs with GA tracking */}
          <div
            className="flex flex-wrap gap-10 justify-center mt-10"
            role="navigation"
            aria-label="Page navigation"
          >
            {TABS.map((tab) => (
              <Link
                key={tab.path}
                href={tab.path}
                onClick={() => trackTabClick(tab.label)}
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