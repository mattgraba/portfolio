"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, User, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_syby29s",   // EmailJS Service ID
        "template_rpjr5tn",  // EmailJS Template ID
        formRef.current,
        "6eg3hbmJ_xzdl7_6I"  // EmailJS Public Key
      )
      .then(
        () => setSubmitted(true),
        () => setError("Something went wrong. Please try again.")
      );
  };

  return (
    <main id="main-content" className="relative w-full min-h-screen overflow-hidden">
      {/* Background */}
      <Image
        src="/images/home.jpg"
        alt="Contact background"
        fill
        className="object-cover z-0"
        priority
      />
      
      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 bg-black/40 min-h-full overflow-y-auto py-12 px-6">
        <div className="w-full max-w-5xl bg-white/20 backdrop-blur rounded-xl p-10 shadow-lg">
          <h1 className="text-4xl font-bold text-white mb-10 text-left">Contact</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white">
            {/* Left: Direct Contact Info */}
            <div className="space-y-6">
              <p className="text-lg text-gray-200">
                Feel free to reach out via the form or directly:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <User className="w-6 h-6 text-green-400" />
                  <span>Matt Graba</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-green-400" />
                  <a href="tel:+16124427737" className="hover:underline">
                    (612) 442-7737
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-green-400" />
                  <a href="mailto:matt.graba14@gmail.com" className="hover:underline">
                    matt.graba14@gmail.com
                  </a>
                </li>
              </ul>

              <div className="flex gap-6 pt-4">
                <a href="https://github.com/mattgraba" target="_blank" rel="noopener noreferrer">
                  <Github className="w-7 h-7 hover:text-green-400 transition" />
                </a>
                <a href="https://linkedin.com/in/mattgraba" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-7 h-7 hover:text-green-400 transition" />
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              {submitted ? (
                <div className="text-center text-white text-xl" role="status" aria-live="polite">
                  Thank you for reaching out!
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div>
                    <label htmlFor="user_name" className="sr-only">Your Name</label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      placeholder="Your Name"
                      required
                      aria-required="true"
                      className="w-full px-4 py-3 rounded-lg bg-white/40 text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="user_email" className="sr-only">Your Email</label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      placeholder="Your Email"
                      required
                      aria-required="true"
                      className="w-full px-4 py-3 rounded-lg bg-white/40 text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      required
                      rows={5}
                      aria-required="true"
                      className="w-full px-4 py-3 rounded-lg bg-white/40 text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                  </div>
                  {error && (
                    <div className="text-red-400 text-sm" role="alert" aria-live="assertive">
                      {error}
                    </div>
                  )}
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-lg bg-green-900 hover:bg-green-800 text-white font-semibold shadow transition-all duration-200"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
