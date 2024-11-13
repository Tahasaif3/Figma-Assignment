import Image from 'next/image'

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#B5A88B] py-4">
      <div className="container mx-1 px-4">
      <h1 className="text-white font-rye text-[40px] w-[439] ">
      MANZZARI
     </h1>
      </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Left Side Text*/}
          <div className="md:col-span-6 space-y-8">
            <h2 className="text-black font-libre-bodoni font-bold text-3xl md:text-4xl lg:text-[40px] w-[496px]">
              IMPECCABLE<br />
              CRAFTSMANSHIP AND<br />
              FINESSE
            </h2>
            <p className="text-[#A3997F] font-libre-bodoni font-medium text-3xl w-[942]">
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.            </p>
            <button className="inline-block bg-[#A3997F] text-white px-8 py-3 font-libre-bodoni text-lg md:text-xl font-medium">
              Explore Now
            </button>
          </div>

          {/* Right Side Image */}
          <div className="md:col-span-6 md:col-start-7">
            <div className="relative h-[600px] md:h-[700px] w-full max-w-[500px] mx-auto">
              {/* Outer Layer with Visible Borders */}
              <div
                className="absolute inset-0"
                style={{
                  borderRadius: "100px 30px 100px 30px",
                  padding: "12px",
                  background: "linear-gradient(135deg, rgba(255,255,255,0.8), rgba(181,168,139,0.3))",
                }}
              >
                {/* Inner Layer with Image */}
                <div
                  className="relative h-full w-full"
                  style={{
                    borderRadius: "88px 24px 88px 24px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/design.jpg"
                    alt="Elegant woman wearing luxury jewelry"
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
