
import Navbar from "../components/Navbar";

export default function Delivery() {
  return (
    <div className="bg-[#FAF3E0] min-h-screen text-[#6B4226]">
      <Navbar />
      <h1 className="text-4xl font-bold text-center mt-6">Delivery Process</h1>
      <div className="mt-8 max-w-2xl mx-auto text-center">
        <p className="text-lg">Getting your kaya is simple and convenient!</p>
        <ol className="mt-6 space-y-4 text-left">
          <li className="bg-white p-4 rounded-lg shadow-md"><span className="font-bold">1) Place your order</span> - Fill out our Google Form to secure your kaya.</li>
          <li className="bg-white p-4 rounded-lg shadow-md"><span className="font-bold">2) Pickup or Delivery</span> - Pickup at <b>655 Kelton</b> or let us know a place within <b>UCLA/Westwood</b> and we’ll meet you!</li>
          <li className="bg-white p-4 rounded-lg shadow-md"><span className="font-bold">3) Enjoy the Kaya</span> - Fresh, homemade, and just like home.</li>
          <li className="bg-white p-4 rounded-lg shadow-md"><span className="font-bold">4) Get 50% Off</span> - Repost our story and enjoy <b>50% off</b> your next purchase!</li>
        </ol>
      </div>
    </div>
  );
}
