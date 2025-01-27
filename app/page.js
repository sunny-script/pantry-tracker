import Image from "next/image";
import Link from "next/link";
import Header from "./ui/header";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center bg-[#c8ba9f]">
      {/* Header */}
      <Header />

      {/* Full-Screen Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/welcome_page_image.png"
          alt="Welcome Page Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Transparent Box with Content */}
      <div className="relative z-10 bg-[#1c1f0a] bg-opacity-80 text-white p-8 rounded-lg shadow-lg flex flex-col items-center gap-4 max-w-lg">

        {/* Instructions */}
        <h1 className="text-3xl font-[family-name:var(--font-playfair-display)]">
          Welcome to PantryPro!
        </h1>
        <p className="text-lg font-[family-name:var(--font-nunito)] max-w-md">
        Made for those who forget what they have on hand. Easily organize and reference your spices, fruits, veggies, and cans-of-who-knows-what.
        </p>

        {/* Get Started Button */}
        <a
          href="/pantryPage"
          className="bg-[#a3c236] hover:bg-[#d9f150] text-[#1c1f0a] font-semibold rounded-xl px-6 py-3 shadow-md transition-all"
        >
          Get started
        </a>
      </div>
    </div>
  );
}
