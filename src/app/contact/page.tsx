"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

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
        "6eg3hbmJ_xzdl7_6I"    // EmailJS Public Key
      )
      .then(
        () => setSubmitted(true),
        () => setError("Something went wrong. Please try again.")
      );
  };

  return (
    <main className="relative w-full min-h-screen overflow-hidden">
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
        <div className="w-full max-w-lg bg-white/20 backdrop-blur rounded-xl p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Contact</h1>
          {submitted ? (
            <div className="text-center text-white text-xl">Thank you for reaching out!</div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="px-4 py-3 rounded-lg bg-white/40 text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="px-4 py-3 rounded-lg bg-white/40 text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={5}
                className="px-4 py-3 rounded-lg bg-white/40 text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              {error && <div className="text-red-400 text-sm">{error}</div>}
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
    </main>
  );
} 