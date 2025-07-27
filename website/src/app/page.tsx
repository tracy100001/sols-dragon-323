import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Blog from "@/components/Blog";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Video from "@/components/Video";
import Works from "@/components/Works";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Image
        width={2000}
        height={1000}
        src="/img/brand/sky-banner.png"
        alt="sky banner image"
        className="img-fluid w-100"
        style={{ maxHeight: "36rem", objectFit: "cover" }}
      />
      <Services />
      <Video />
      <Testimonial />
      <Works />
      <Blog />
      <Image
        width={2000}
        height={1000}
        src="/img/brand/billboard.png"
        alt="billboard image"
        className="img-fluid w-100"
        style={{ maxHeight: "36rem", objectFit: "cover" }}
      />
      <Contact />
    </>
  );
}
