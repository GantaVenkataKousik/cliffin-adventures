import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <div className="bg-white p-2 rounded-md inline-block">
                <Image
                  src="/images/logo.svg"
                  alt="Cliff-Inn Adventures Logo"
                  width={180}
                  height={60}
                  className="h-10 w-auto"
                />
              </div>
            </Link>
            <p className="text-stone-400 mb-6">
              Immerse yourself in nature with our premium camping experiences and thrilling adventures in the most
              breathtaking locations.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://instagram.com" icon={<Instagram size={20} />} label="Instagram" />
              <SocialLink href="https://facebook.com" icon={<Facebook size={20} />} label="Facebook" />
              <SocialLink href="https://twitter.com" icon={<Twitter size={20} />} label="Twitter" />
              <SocialLink href="https://youtube.com" icon={<Youtube size={20} />} label="YouTube" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <FooterLink href="/adventures">Our Adventures</FooterLink>
              </li>
              <li>
                <FooterLink href="/about">About Us</FooterLink>
              </li>
              <li>
                <FooterLink href="/gallery">Gallery</FooterLink>
              </li>
              <li>
                <FooterLink href="/#booking">Book Now</FooterLink>
              </li>
              <li>
                <FooterLink href="/contact">Contact</FooterLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Adventures</h3>
            <ul className="space-y-3">
              <li>
                <FooterLink href="/adventures#lakeside-serenity">Lakeside Serenity</FooterLink>
              </li>
              <li>
                <FooterLink href="/adventures#forest-expedition">Forest Expedition</FooterLink>
              </li>
              <li>
                <FooterLink href="/adventures#mountain-thrill">Mountain Thrill</FooterLink>
              </li>
              <li>
                <FooterLink href="/adventures#custom">Custom Adventures</FooterLink>
              </li>
              <li>
                <FooterLink href="/adventures#group-packages">Group Packages</FooterLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                <span className="text-stone-400">123 Adventure Way, Wilderness Park, WP 98765, United States</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <a href="tel:+11234567890" className="text-stone-400 hover:text-white transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <a
                  href="mailto:venkatakousikcse01@gmail.com"
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  venkatakousikcse01@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Cliff-Inn Adventures. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-stone-500">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-stone-800 hover:bg-amber-500 p-2 rounded-full transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  )
}

function FooterLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link href={href} className="text-stone-400 hover:text-white transition-colors">
      {children}
    </Link>
  )
}
