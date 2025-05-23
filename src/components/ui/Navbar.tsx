// app/components/Navbar.tsx
"use client"

import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from "@/components/ui/menubar"
import { useEffect, useState } from "react"

export function Navbar() {
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
    <div className="w-full px-4 py-2">
      <Menubar className="justify-between w-full">
        <div className="flex gap-2">
          <MenubarMenu>
            <MenubarTrigger>Navigate</MenubarTrigger>
            <MenubarContent>
              <MenubarItem asChild>
                <a href="/">Home</a>
              </MenubarItem>
              <MenubarItem asChild>
                <a href="/projects">Projects</a>
              </MenubarItem>
              <MenubarItem asChild>
                <a href="/contact">Contact</a>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </div>

        <div className="flex gap-2">
          <MenubarMenu>
            <MenubarTrigger>Settings</MenubarTrigger>
            <MenubarContent>
              <MenubarItem onClick={toggleTheme}>
                {theme === "light" ? "🌙 Enable Dark Mode" : "🌞 Enable Light Mode"}
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </div>
      </Menubar>
    </div>
  )
}
