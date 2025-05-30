export default function StatsSection() {
  return (
    <section className="py-16 bg-gray-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/texture-bg.png')] opacity-10"></div>
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
          {/* Stat 1 */}
          <div className="flex flex-col items-center">
            <span className="text-5xl md:text-6xl font-bold text-primary mb-2">324+</span>
            <span className="text-xl font-semibold">Adventure Workshops</span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            <span className="text-5xl md:text-6xl font-bold text-primary mb-2">213+</span>
            <span className="text-xl font-semibold">Treks</span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center">
            <span className="text-5xl md:text-6xl font-bold text-primary mb-2">17033+</span>
            <span className="text-xl font-semibold">Happy Customers</span>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center">
            <span className="text-5xl md:text-6xl font-bold text-primary mb-2">465+</span>
            <span className="text-xl font-semibold">Nightcamps</span>
          </div>

          {/* Stat 5 */}
          <div className="flex flex-col items-center">
            <span className="text-5xl md:text-6xl font-bold text-primary mb-2">124+</span>
            <span className="text-xl font-semibold">Backpacking Trips</span>
          </div>
        </div>
      </div>
    </section>
  )
}
