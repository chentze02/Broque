import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <div className="bg-[#FAF3E0] min-h-screen text-[#6B4226]">
      <Navbar />
      <main className="flex flex-col items-center mt-16 px-6 text-center">
        <h2 className="text-5xl font-extrabold">Kaya Toast for Broque Students</h2>
        <p className="mt-4 text-lg max-w-2xl">
          Bringing affordable, delicious kaya toast to college students who love good food but are on a budget.
        </p>
        <Image src="/kaya-toast.jpg" alt="Delicious Kaya Toast" width={600} height={400} className="mt-6 rounded-lg shadow-lg" />
        <Link href="/shop" className="mt-6 bg-[#B5651D] text-white py-2 px-6 rounded-lg text-lg hover:bg-[#8A4F1D]">
          Order Now
        </Link>
      </main>
    </div>
  );
}