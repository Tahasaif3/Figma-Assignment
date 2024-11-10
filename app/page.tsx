import Image from 'next/image'
import Header from '../components/Header'

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Left Side Text*/}
          <div className="md:col-span-7 space-y-6 ml-8">
            <h1 className="text-black font-libre-bodoni font-bold text-3xl md:text-4xl lg:text-[40px] w-[496px]">
              IMPECCABLE CRAFTSMANSHIP AND FINESSE
            </h1>
            <p className="text-[#A3997F] font-libre-bodoni font-medium text-3xl md:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam quas, consequuntur consectetur dolorem impedit beatae magni repudiandae provident.
            </p>
            <button className="inline-block bg-[#A3997F] text-white px-8 py-3 font-libre-bodoni text-lg md:text-xl font-medium">
              Explore Now
            </button>
          </div>
{/* Right Side Image */}
<div className="md:col-span-5 md:col-start-8">
  <div className="relative h-[600px] md:h-[750px] w-[350px] md:w-[450px] mx-auto">
    {/* Outer Layer with Visible Borders */}
    <div
      className="absolute inset-0"
      style={{
        borderRadius: "80px 20px 80px 20px", // Adjusted for smoother rounded corners
        padding: "8px", // Increased padding for thicker visible borders
        background: "linear-gradient(to bottom right, rgba(255,255,255,0.6), rgba(255,255,255,0.3))",
      }}
    >
      {/* Inner Layer with Image */}
      <div
        className="relative h-full w-full"
        style={{
          borderRadius: "72px 18px 72px 18px", // Slightly smaller radius for the inner layer
          overflow: "hidden", // Ensures the image respects the curved corners
        }}
      >
        <Image
          src="/design.jpg" // Replace with the uploaded image path
          alt="Luxury jewelry model inside styled layer"
          fill
          className="object-contain" // Ensures the full image is visible
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