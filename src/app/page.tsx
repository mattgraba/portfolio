"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function Portfolio() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs.send(
      'service_syby29s',      // EmailJS service ID
      'template_rpjr5tn',     // EmailJS template ID
      form,                   // This should match your template fields
      '6eg3hbmJ_xzdl7_6I'       // Replace with your EmailJS public key
    )
    .then(() => {
      alert("Thanks for reaching out, Matt will get back to you soon!");
      setForm({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      alert("Oops, something went wrong. Please try again later.");
    });
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-center space-y-4"
      >
        <h1 className="text-5xl font-bold text-primary">Matt Graba</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          I&apos;m a passionate and creative designer who loves building beautiful, user-focused digital experiences. My mission is to help others bring their visions to life so they can follow their dreams.
        </p>
        <div className="flex justify-center gap-6 pt-2">
          <a href="https://www.linkedin.com/in/matthew-graba-698266238/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6 hover:text-primary" />
          </a>
          <a href="https://github.com/mattgraba" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-6 w-6 hover:text-primary" />
          </a>
          <a href="mailto:matt.graba14@gmail.com" aria-label="Email">
            <Mail className="h-6 w-6 hover:text-primary" />
          </a>
          <a href="/Matt_Graba_Resume.pdf" download aria-label="Download Resume">
            <Download className="h-6 w-6 hover:text-primary" />
          </a>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Technical Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center text-muted-foreground">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Git</li>
          <li>REST APIs</li>
          <li>Responsive Design</li>
          <li>UI/UX Principles</li>
          <li>Tailwind CSS</li>
          <li>Next.js</li>
          <li>Figma</li>
        </ul>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-bold">[Project 1 Placeholder]</h3>
              <p className="text-sm text-muted-foreground">Short description here...</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-bold">[Project 2 Placeholder]</h3>
              <p className="text-sm text-muted-foreground">Short description here...</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-bold">[Project 3 Placeholder]</h3>
              <p className="text-sm text-muted-foreground">Short description here...</p>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-semibold text-center">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
          <Input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
          <Input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
          <Textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} rows={5} required />
          <div className="text-center">
            <Button type="submit">Send Message</Button>
          </div>
        </form>
      </motion.section>
    </main>
  );
}
