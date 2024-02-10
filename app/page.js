import Cards from "@/layouts//Cards";
import Header from "@/layouts//Header";
import Navbar from "@/module//Navbar";
import Slider from "@/module//Slider";

export default function Home() {
  return (
    <main className="main">
      <div className="w-[96vw] max-w-[1320px] mx-auto">
        <Header />
        <Navbar />
        <Slider />
        <Cards />
      </div>
    </main>
  );
}
