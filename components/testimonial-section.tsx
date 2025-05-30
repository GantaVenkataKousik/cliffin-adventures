import Image from "next/image"

export default function TestimonialSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container-custom">
        <h2 className="section-title">What Our Adventurers Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 relative">
            <div className="absolute -top-5 left-8 text-primary">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.032-.52.112-1.08.239-.573.134-.855.202-.846.202l.608-2.82c.132-.52.293-1.02.48-1.503.168-.503.337-.861.505-1.075.146-.215.338-.332.578-.352.24-.033.518.052.835.256.31.195.55.453.718.775.167.322.28.655.337.998l.041.043c.072.035.169.053.292.053h1.5c.086 0 .159-.03.22-.09.063-.06.094-.134.094-.22 0-.398-.094-.83-.281-1.29-.188-.47-.512-.873-.97-1.208-.459-.336-1.031-.503-1.72-.503-.665 0-1.239.17-1.720.512-.48.341-.854.748-1.119 1.22-.273.483-.48.954-.623 1.414-.127.46-.21.85-.247 1.172-.036.321-.033.58.008.779.04.199.072.334.094.407l.612 3.56c.07.396.17.718.3.967.13.249.317.463.561.643.245.18.516.307.814.381.297.075.598.112.903.112.382 0 .77-.058 1.163-.174.394-.115.73-.323 1.004-.624.274-.3.49-.695.647-1.184.158-.49.237-1.092.237-1.807zm7.43 0c0-.88-.23-1.618-.69-2.217-.326-.412-.77-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.032-.52.112-1.08.239-.573.134-.855.202-.846.202l.608-2.82c.132-.52.293-1.02.48-1.503.168-.503.337-.861.505-1.075.146-.215.338-.332.578-.352.24-.033.518.052.835.256.31.195.55.453.718.775.167.322.28.655.337.998l.041.043c.072.035.17.053.292.053h1.5c.086 0 .159-.03.22-.09.063-.06.094-.134.094-.22 0-.398-.094-.83-.281-1.29-.188-.47-.512-.873-.97-1.208-.459-.336-1.031-.503-1.72-.503-.665 0-1.239.17-1.72.512-.48.341-.854.748-1.119 1.22-.273.483-.48.954-.623 1.414-.127.46-.21.85-.247 1.172-.036.321-.033.58.008.779.04.199.072.334.094.407l.612 3.56c.07.396.17.718.3.967.13.249.317.463.561.643.245.18.516.307.814.381.297.075.598.112.903.112.382 0 .77-.058 1.163-.174.394-.115.73-.323 1.004-.624.274-.3.49-.695.647-1.184.158-.49.237-1.092.237-1.807z" />
              </svg>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-bold text-primary mb-2">"Perfect Blend of Adventure & Relaxation!"</h3>
              <p className="mb-6 text-gray-700">
                "The backpacking trip was a fantastic escape from city life. The scenic trails, cultural experiences,
                and well-planned itinerary made it a memorable journey. Highly recommend for anyone seeking an offbeat
                adventure!"
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <Image src="/images/avatar-1.jpg" alt="Priya Mehta" width={50} height={50} className="rounded-full" />
                </div>
                <div>
                  <p className="font-semibold">Priya Mehta</p>
                  <p className="text-sm text-gray-600">Travel Enthusiast</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 relative">
            <div className="absolute -top-5 left-8 text-primary">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.032-.52.112-1.08.239-.573.134-.855.202-.846.202l.608-2.82c.132-.52.293-1.02.48-1.503.168-.503.337-.861.505-1.075.146-.215.338-.332.578-.352.24-.033.518.052.835.256.31.195.55.453.718.775.167.322.28.655.337.998l.041.043c.072.035.169.053.292.053h1.5c.086 0 .159-.03.22-.09.063-.06.094-.134.094-.22 0-.398-.094-.83-.281-1.29-.188-.47-.512-.873-.97-1.208-.459-.336-1.031-.503-1.72-.503-.665 0-1.239.17-1.720.512-.48.341-.854.748-1.119 1.22-.273.483-.48.954-.623 1.414-.127.46-.21.85-.247 1.172-.036.321-.033.58.008.779.04.199.072.334.094.407l.612 3.56c.07.396.17.718.3.967.13.249.317.463.561.643.245.18.516.307.814.381.297.075.598.112.903.112.382 0 .77-.058 1.163-.174.394-.115.73-.323 1.004-.624.274-.3.49-.695.647-1.184.158-.49.237-1.092.237-1.807z" />
              </svg>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-bold text-primary mb-2">"An Unforgettable Experience!"</h3>
              <p className="mb-6 text-gray-700">
                "Our corporate retreat with Cliff-Inn Adventures was nothing short of amazing! The campsite, activities,
                and team-building sessions were perfectly organized. The bonfire and adventure games brought our team
                closer than ever!"
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <Image
                    src="/images/avatar-2.jpg"
                    alt="Rohit Sharma"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="font-semibold">Rohit Sharma</p>
                  <p className="text-sm text-gray-600">Corporate Manager</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-xl shadow-lg p-8 relative">
            <div className="absolute -top-5 left-8 text-primary">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.032-.52.112-1.08.239-.573.134-.855.202-.846.202l.608-2.82c.132-.52.293-1.02.48-1.503.168-.503.337-.861.505-1.075.146-.215.338-.332.578-.352.24-.033.518.052.835.256.31.195.55.453.718.775.167.322.28.655.337.998l.041.043c.072.035.169.053.292.053h1.5c.086 0 .159-.03.22-.09.063-.06.094-.134.094-.22 0-.398-.094-.83-.281-1.29-.188-.47-.512-.873-.97-1.208-.459-.336-1.031-.503-1.72-.503-.665 0-1.239.17-1.720.512-.48.341-.854.748-1.119 1.22-.273.483-.48.954-.623 1.414-.127.46-.21.85-.247 1.172-.036.321-.033.58.008.779.04.199.072.334.094.407l.612 3.56c.07.396.17.718.3.967.13.249.317.463.561.643.245.18.516.307.814.381.297.075.598.112.903.112.382 0 .77-.058 1.163-.174.394-.115.73-.323 1.004-.624.274-.3.49-.695.647-1.184.158-.49.237-1.092.237-1.807zm7.43 0c0-.88-.23-1.618-.69-2.217-.326-.412-.77-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.032-.52.112-1.08.239-.573.134-.855.202-.846.202l.608-2.82c.132-.52.293-1.02.48-1.503.168-.503.337-.861.505-1.075.146-.215.338-.332.578-.352.24-.033.518.052.835.256.31.195.55.453.718.775.167.322.28.655.337.998l.041.043c.072.035.17.053.292.053h1.5c.086 0 .159-.03.22-.09.063-.06.094-.134.094-.22 0-.398-.094-.83-.281-1.29-.188-.47-.512-.873-.97-1.208-.459-.336-1.031-.503-1.72-.503-.665 0-1.239.17-1.72.512-.48.341-.854.748-1.119 1.22-.273.483-.48.954-.623 1.414-.127.46-.21.85-.247 1.172-.036.321-.033.58.008.779.04.199.072.334.094.407l.612 3.56c.07.396.17.718.3.967.13.249.317.463.561.643.245.18.516.307.814.381.297.075.598.112.903.112.382 0 .77-.058 1.163-.174.394-.115.73-.323 1.004-.624.274-.3.49-.695.647-1.184.158-.49.237-1.092.237-1.807z" />
              </svg>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-bold text-primary mb-2">"Great Team-Building Workshops!"</h3>
              <p className="mb-6 text-gray-700">
                "Our team had an incredible time at the adventure workshop. The activities were engaging, and the
                natural setting made it even more refreshing. A perfect mix of fun and learning!"
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <Image src="/images/avatar-3.jpg" alt="Amit Verma" width={50} height={50} className="rounded-full" />
                </div>
                <div>
                  <p className="font-semibold">Amit Verma</p>
                  <p className="text-sm text-gray-600">HR Professional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
