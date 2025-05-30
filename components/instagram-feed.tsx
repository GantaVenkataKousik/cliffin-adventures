import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"

export default function InstagramFeed() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Follow us on Instagram</h2>
          <Link
            href="https://instagram.com/cliffinnadvnetures"
            className="text-primary font-semibold hover:underline flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={20} />
            @cliffinnadvnetures
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {/* Instagram Post 1 */}
          <Link
            href="https://instagram.com/cliffinnadvnetures"
            className="relative group overflow-hidden rounded-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/insta-1.jpg"
              alt="Instagram post"
              width={200}
              height={200}
              className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>

          {/* Instagram Post 2 */}
          <Link
            href="https://instagram.com/cliffinnadvnetures"
            className="relative group overflow-hidden rounded-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/insta-2.jpg"
              alt="Instagram post"
              width={200}
              height={200}
              className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>

          {/* Instagram Post 3 */}
          <Link
            href="https://instagram.com/cliffinnadvnetures"
            className="relative group overflow-hidden rounded-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/insta-3.jpg"
              alt="Instagram post"
              width={200}
              height={200}
              className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>

          {/* Instagram Post 4 */}
          <Link
            href="https://instagram.com/cliffinnadvnetures"
            className="relative group overflow-hidden rounded-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/insta-4.jpg"
              alt="Instagram post"
              width={200}
              height={200}
              className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>

          {/* Instagram Post 5 */}
          <Link
            href="https://instagram.com/cliffinnadvnetures"
            className="relative group overflow-hidden rounded-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/insta-5.jpg"
              alt="Instagram post"
              width={200}
              height={200}
              className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>

          {/* Instagram Post 6 */}
          <Link
            href="https://instagram.com/cliffinnadvnetures"
            className="relative group overflow-hidden rounded-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/insta-6.jpg"
              alt="Instagram post"
              width={200}
              height={200}
              className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
