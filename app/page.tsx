import Image from "next/image"

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#B5A88B] py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-white font-rye text-3xl sm:text-4xl md:text-[40px]">MANZZARI</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Side Text*/}
          <div className="lg:col-span-6 space-y-6 md:space-y-8">
            <h2 className="text-black font-libre-bodoni font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] max-w-[496px]">
              IMPECCABLE
              <br />
              CRAFTSMANSHIP AND
              <br />
              FINESSE
            </h2>
            <p className="text-[#A3997F] font-libre-bodoni font-medium text-xl sm:text-2xl md:text-3xl max-w-[942px]">
              An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of
              our desirable collection.
            </p>
            <button className="inline-block bg-[#A3997F] text-white px-6 py-2 sm:px-8 sm:py-3 font-libre-bodoni text-base sm:text-lg md:text-xl font-medium">
              Explore Now
            </button>
          </div>

          {/* Right Side Image */}
          <div className="lg:col-span-6 lg:col-start-7 mt-8 lg:mt-0">
            <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-full max-w-[500px] mx-auto">
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
                  <Image src="/design.jpg" alt="Jewelry Design" fill className="object-cover" priority />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

