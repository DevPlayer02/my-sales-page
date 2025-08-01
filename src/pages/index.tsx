import { Banner } from "@/components/Banner";
import { Guarantee } from "@/components/Guarantee";
import { Header } from "@/components/Header";
import { MovingBars } from "@/components/MovingBars";
import { SectionTwo } from "@/components/SectionTwo";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <SectionTwo />
      <MovingBars />
      <Guarantee />
    </>
  );
}
