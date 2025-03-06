import Image from "next/image";
import Navbar from "@/components/navbar";
import PhotoDisplay from "@/components/PhotoDisplay";
export default function Home() {
  return (
    <div className="flex-1 flex flex-col min-h-screen overflow-y-auto">
      <Navbar/>
      <main className="w-full h-[2400px] flex items-center">
      <PhotoDisplay/>
      </main>
    </div>
  );
}
