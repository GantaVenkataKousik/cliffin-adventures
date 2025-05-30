import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Cliff-Inn Adventures | Premium Camping & Adventure Experiences",
  description:
    "Discover breathtaking camping and adventure experiences in the most beautiful wilderness locations. Book your unforgettable journey today.",
  generator: 'v0.dev',
  icons: {
    icon: 'https://i.postimg.cc/PqbWFcZF/image-removebg-preview.png',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
