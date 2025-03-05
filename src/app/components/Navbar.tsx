import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-[#D4A373] shadow-md">
      <h1 className="text-3xl font-bold">Broque</h1>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-[#B5651D]">Home</Link>
          </li>
          <li>
            <Link href="/shop" className="hover:text-[#B5651D]">Shop</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-[#B5651D]">About</Link>
          </li>

        </ul>
      </nav>
    </header>
  );
}
