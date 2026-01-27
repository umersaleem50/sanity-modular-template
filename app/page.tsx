import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Navbar />
        <Button variant={"destructive"}>Click me</Button>
      </main>
    </div>
  );
}
