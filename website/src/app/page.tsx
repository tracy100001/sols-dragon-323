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
        src="/brand assets/New folder/Asset 20.png"
        alt="billboard image"
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
        src="/brand assets/New folder/sol new Billboard_Mockup.png"
        alt="billboard image"
        className="img-fluid w-100"
        style={{ maxHeight: "36rem", objectFit: "cover" }}
      />
      <Contact />
    </>
  );
}
