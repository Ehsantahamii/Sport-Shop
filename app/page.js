import Cards from "@/layouts//Cards";
import Header from "@/layouts//Header";
import Navbar from "@/module//Navbar";
import Slider from "@/module//Slider";
import Category from "@/template//Category";

export default function Home() {
  return (
    <>
      <Slider />
      <Cards />
      <Category />
    </>
  );
}
