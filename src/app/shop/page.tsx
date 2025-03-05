import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Shop() {
  return (
    <div className="bg-[#FAF3E0] min-h-screen text-[#6B4226]">
      <Navbar />
      <h1 className="text-4xl font-bold text-center mt-6">Shop Our Kaya</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <Image src="/classic-kaya.jpg" alt="Classic Kaya" width={300} height={200} className="mx-auto rounded-lg" />
          <h2 className="text-2xl font-semibold mt-2">Classic Kaya</h2>
          <p className="mt-2">Traditional coconut caramel spread.</p>
          <a href="https://forms.gle/HfSBwu2yziYHE4tY6" target="_blank" rel="noopener noreferrer">
            <button className="mt-4 bg-[#B5651D] text-white py-2 px-4 rounded-lg hover:bg-[#8A4F1D]">
              Order Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}