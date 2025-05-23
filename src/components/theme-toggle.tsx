// components/ThemeToggle.tsx
"use client"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const stored = localStorage.getItem("theme") || "light"
    setTheme(stored)
    document.documentElement.classList.toggle("dark", stored === "dark")
  }, [])

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light"
    setTheme(next)
    localStorage.setItem("theme", next)
    document.documentElement.classList.toggle("dark", next === "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className="ml-auto rounded px-3 py-2 text-sm font-medium bg-accent text-accent-foreground hover:bg-accent/80 transition"
    >
      {theme === "light" ? "🌙 Dark Mode" : "🌞 Light Mode"}
    </button>
  )
}
