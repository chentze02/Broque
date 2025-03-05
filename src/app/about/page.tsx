import Navbar from "../components/Navbar";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-[#FAF3E0] min-h-screen text-[#6B4226]">
      <Navbar />
      <h1 className="text-4xl font-bold text-center mt-6">Our Story</h1>
      <p className="mt-4 max-w-2xl mx-auto text-center">
        Broque started with the mission to provide delicious, affordable kaya toast to students on a budget. 
        Inspired by our love for Southeast Asian flavors and the struggle of being broke in college, we bring 
        you high-quality kaya made with love.
      </p>
      <Image src="/about-kaya.jpg" alt="Making Kaya" width={600} height={400} className="mt-6 mx-auto rounded-lg shadow-lg" />
    </div>
  );
}
