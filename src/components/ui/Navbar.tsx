// app/components/Navbar.tsx
"use client"

import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from "@/components/ui/menubar"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

export function Navbar() {
  const [theme, setTheme] = useState("light")
  const pathname = usePathname()

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

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <div className="sticky top-0 z-50 w-full px-4 py-2 backdrop-blur-sm bg-background/80 border-b">
      <Menubar className="justify-between w-full border-none">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-xl">MG</Link>
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm transition-colors hover:text-primary ${
                  pathname === item.path ? "text-primary font-medium" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="md:hidden">
            <MenubarMenu>
              <MenubarTrigger>Menu</MenubarTrigger>
              <MenubarContent>
                {navItems.map((item) => (
                  <MenubarItem key={item.path} asChild>
                    <Link 
                      href={item.path}
                      className={pathname === item.path ? "text-primary" : ""}
                    >
                      {item.name}
                    </Link>
                  </MenubarItem>
                ))}
              </MenubarContent>
            </MenubarMenu>
          </div>
        </div>

        <div className="flex gap-2">
          <MenubarMenu>
            <MenubarTrigger>Settings</MenubarTrigger>
            <MenubarContent>
              <MenubarItem onClick={toggleTheme}>
                {theme === "light" ? "🌙 Dark Mode" : "🌞 Light Mode"}
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </div>
      </Menubar>
    </div>
  )
}
