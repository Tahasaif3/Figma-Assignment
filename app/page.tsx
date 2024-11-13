import Image from 'next/image'
import Header from '../componenets/Header'

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
    <Header/>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Left Side Text*/}
          <div className="md:col-span-6 space-y-8">
            <h2 className="text-black font-serif text-4xl md:text-5xl leading-tight">
              IMPECCABLE<br />
              CRAFTSMANSHIP AND<br />
              FINESSE
            </h2>
            <p className="text-[#B5A88B] font-serif text-xl leading-relaxed">
              An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
            </p>
            <button className="bg-[#B5A88B] text-white px-8 py-3 font-serif text-lg">
              Explore Now
            </button>
          </div>

          {/* Right Side Image */}
          <div className="md:col-span-6 md:col-start-7">
            <div className="relative h-[600px] md:h-[700px] w-full max-w-[500px] mx-auto">
              <div
                className="absolute inset-0"
                style={{
                  borderRadius: "100px 30px 100px 30px",
                  padding: "12px",
                  background: "linear-gradient(135deg, rgba(255,255,255,0.8), rgba(181,168,139,0.3))",
                }}
              >
                <div
                  className="relative h-full w-full"
                  style={{
                    borderRadius: "88px 24px 88px 24px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/jdesign.jpg.jpg"
                    alt="Image Figma Website"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
