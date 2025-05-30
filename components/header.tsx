"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            {isScrolled ? (
              <Image
                src="https://i.postimg.cc/PqbWFcZF/image-removebg-preview.png"
                alt="Cliff-Inn Adventures Logo"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            ) : (
              <div className="bg-white/90 p-2 rounded-md">
                <Image
                  src="https://i.postimg.cc/PqbWFcZF/image-removebg-preview.png"
                  alt="Cliff-Inn Adventures Logo"
                  width={180}
                  height={60}
                  className="h-10 w-auto"
                />
              </div>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink href="/" isScrolled={isScrolled} isActive={isActive("/")}>
              Home
            </NavLink>
            <NavLink href="/adventures" isScrolled={isScrolled} isActive={isActive("/adventures")}>
              Adventures
            </NavLink>
            <NavLink href="/about" isScrolled={isScrolled} isActive={isActive("/about")}>
              About
            </NavLink>
            <NavLink href="/gallery" isScrolled={isScrolled} isActive={isActive("/gallery")}>
              Gallery
            </NavLink>
            <NavLink href="/contact" isScrolled={isScrolled} isActive={isActive("/contact")}>
              Contact
            </NavLink>
            <NavLink href="/#booking" isScrolled={isScrolled} isButton>
              Book Now
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-stone-800 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col">
            <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)} isActive={isActive("/")}>
              Home
            </MobileNavLink>
            <MobileNavLink href="/adventures" onClick={() => setIsMenuOpen(false)} isActive={isActive("/adventures")}>
              Adventures
            </MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)} isActive={isActive("/about")}>
              About
            </MobileNavLink>
            <MobileNavLink href="/gallery" onClick={() => setIsMenuOpen(false)} isActive={isActive("/gallery")}>
              Gallery
            </MobileNavLink>
            <MobileNavLink href="/contact" onClick={() => setIsMenuOpen(false)} isActive={isActive("/contact")}>
              Contact
            </MobileNavLink>
            <MobileNavLink href="/#booking" onClick={() => setIsMenuOpen(false)} isButton>
              Book Now
            </MobileNavLink>
          </nav>
        </div>
      )}
    </header>
  )
}

function NavLink({
  href,
  children,
  isScrolled,
  isActive = false,
  isButton = false,
}: {
  href: string
  children: React.ReactNode
  isScrolled: boolean
  isActive?: boolean
  isButton?: boolean
}) {
  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
        isButton
          ? "bg-amber-500 hover:bg-amber-600 text-stone-900"
          : isActive
            ? isScrolled
              ? "bg-stone-100 text-amber-600"
              : "bg-white/20 text-amber-400"
            : isScrolled
              ? "text-stone-800 hover:bg-stone-100"
              : "text-white hover:bg-white/20"
      }`}
    >
      {children}
    </Link>
  )
}

function MobileNavLink({
  href,
  children,
  onClick,
  isActive = false,
  isButton = false,
}: {
  href: string
  children: React.ReactNode
  onClick: () => void
  isActive?: boolean
  isButton?: boolean
}) {
  return (
    <Link
      href={href}
      className={`py-3 px-4 block font-medium ${
        isButton
          ? "bg-amber-500 text-stone-900 rounded-lg my-2 text-center"
          : isActive
            ? "text-amber-600 bg-stone-50 rounded-lg"
            : "text-stone-800"
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
