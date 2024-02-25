import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-24">
      <main className="flex flex-col items-center flex-grow justify-center">
        <h1 className="text-3xl font-bold">math folder</h1>
        <p className="text-lg mt-4">
          Check back soon!
        </p>
      </main>
      <footer className="mt-auto py-8">
        <p>
          code by{" "}
          <Link href="https://kwaji.com" target="_blank" className="text-blue-500 hover:underline">
              kwaji
          </Link>
        </p>
      </footer>
    </div>
  );
}
