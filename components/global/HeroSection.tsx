"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/TextEffect";
import { AnimatedGroup } from "@/components/ui/AnimatedGroup";
import CircularGallery from "@/components/ui/circular-gallery";
import LaserFlow from "../LaserFlow";
import Image from "next/image";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

const defaultItems = [
  {
    image: `https://res.cloudinary.com/harshitproject/image/upload/v1746774805/Behance-screen.png`,
    text: "Behance",
  },
  {
    image: `https://res.cloudinary.com/harshitproject/image/upload/v1746774805/Notion-screen.png`,
    text: "Notion",
  },
  {
    image: `https://res.cloudinary.com/harshitproject/image/upload/v1746774806/One-screen.png`,
    text: "One",
  },
  {
    image: `https://res.cloudinary.com/harshitproject/image/upload/v1746774807/Reddit-nj7hwh.png`,
    text: "Reddit",
  },
  {
    image: `https://res.cloudinary.com/harshitproject/image/upload/v1746774805/Behance-screen.png`,
    text: "Behance",
  },
  {
    image: `https://res.cloudinary.com/harshitproject/image/upload/v1746774805/Notion-screen.png`,
    text: "Notion",
  },
];

// export function HeroSection1() {
//   return (
//     <>
//       <main className="z-10">
//         <section>
//           <div className="relative overflow-hidden pt-2 md:pt-4">
//             {/* Constrained content for the hero text */}
//             <div className="mx-auto max-w-7xl px-6">
//               <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
//                 <AnimatedGroup variants={transitionVariants}>
//                   <Link
//                     href="#link"
//                     className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
//                   >
//                     <span className="text-foreground text-sm">
//                       Introducing Exclusive Curated UI Designs
//                     </span>
//                     <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>
//                     <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
//                       <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
//                         <span className="flex size-6">
//                           <ArrowRight className="m-auto size-3 text-foreground" />
//                         </span>
//                         <span className="flex size-6">
//                           <ArrowRight className="m-auto size-3  text-foreground" />
//                         </span>
//                       </div>
//                     </div>
//                   </Link>
//                 </AnimatedGroup>

//                 <TextEffect
//                   preset="fade-in-blur"
//                   speedSegment={0.3}
//                   as="h1"
//                   className="mt-8 text-foreground text-6xl  md:text-7xl lg:mt-16 xl:text-[5.25rem] "
//                 >
//                   The Ultimate Library of Curated UI Designs
//                 </TextEffect>
//                 <TextEffect
//                   per="line"
//                   preset="fade-in-blur"
//                   speedSegment={0.3}
//                   delay={0.5}
//                   as="p"
//                   className="mx-auto mt-8 max-w-2xl text-balance text-lg  text-foreground"
//                 >
//                   Explore hundreds of beautifully crafted user interfaces from
//                   top designers around the world. Choose our handpicked gallery
//                   of modern UI inspiration.
//                 </TextEffect>

//                 <AnimatedGroup
//                   variants={{
//                     container: {
//                       visible: {
//                         transition: {
//                           staggerChildren: 0.05,
//                           delayChildren: 0.75,
//                         },
//                       },
//                     },
//                     ...transitionVariants,
//                   }}
//                   className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
//                 >
//                   <div key={1} className="">
//                     <Button
//                       asChild
//                       size="lg"
//                       className="rounded-md px-5 text-base"
//                     >
//                       <Link href="#link">
//                         <span className="text-nowrap">Browse Designs</span>
//                       </Link>
//                     </Button>
//                   </div>
//                   <Button
//                     key={2}
//                     asChild
//                     size="lg"
//                     variant="ghost"
//                     className="rounded-md px-5 bg-foreground/10"
//                   >
//                     <Link href="#link">
//                       <span className="text-nowrap">Submit Your Work</span>
//                     </Link>
//                   </Button>
//                 </AnimatedGroup>
//               </div>
//             </div>

//             <div className="mt-12 w-screen relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]">
//               <CircularGallery
//                 items={defaultItems}
//                 bend={-9}
//                 textColor="#ffffff"
//                 borderRadius={0.03}
//               />
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }

function HeroSection1() {
  const revealImgRef = useRef(null);

  return (
    <div
      style={{
        height: "800px",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#060010",
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty("--mx", `${x}px`);
          el.style.setProperty("--my", `${y + rect.height * 0.5}px`);
        }
      }}
      onMouseLeave={() => {
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty("--mx", "-9999px");
          el.style.setProperty("--my", "-9999px");
        }
      }}
    >
      <LaserFlow
        horizontalBeamOffset={0.1}
        verticalBeamOffset={0.0}
        color="#81c984"
        // className="bg-background"
        horizontalSizing={0.8}
        verticalSizing={3}
        wispDensity={1}
        wispSpeed={17}
        wispIntensity={5}
        flowSpeed={0.35}
        flowStrength={0.25}
        fogIntensity={0.45}
        fogScale={0.3}
        fogFallSpeed={0.6}
        decay={1.1}
        falloffStart={1.2}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[95%] h-[60%] bg-black rounded-[20px] border-2 border-border flex items-center gap-3 text-white text-[2rem] z-[6] px-6">
        {/* Your content here */}

        <TextEffect
          preset="fade-in-blur"
          speedSegment={0.3}
          as="h1"
          className="text-foreground text-3xl md:text-5xl xl:text-7xl "
        >
          The Ultimate Library of Curated UI Designs
        </TextEffect>
        <TextEffect
          per="line"
          preset="fade-in-blur"
          speedSegment={0.3}
          delay={0.5}
          as="p"
          className="max-w-2xl text-balance text-lg  text-foreground"
        >
          Explore hundreds of beautifully crafted user interfaces from top
          designers around the world. Choose our handpicked gallery of modern UI
          inspiration.
        </TextEffect>

        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.75,
                },
              },
            },
            ...transitionVariants,
          }}
          className="flex flex-col items-center justify-center gap-2 md:flex-row"
        >
          <div key={1} className="">
            <Button asChild size="lg" className="rounded-md px-5 text-base">
              <Link href="#link">
                <span className="text-nowrap">Browse Designs</span>
              </Link>
            </Button>
          </div>
          <Button
            key={2}
            asChild
            size="lg"
            variant="ghost"
            className="rounded-md px-5 bg-foreground/10"
          >
            <Link href="#link">
              <span className="text-nowrap">Submit Your Work</span>
            </Link>
          </Button>
        </AnimatedGroup>
      </div>

      <Image
        ref={revealImgRef}
        src="/path/to/image.jpg"
        alt="Reveal effect"
        fill
        style={{
          position: "absolute",
          width: "100%",
          top: "-50%",
          zIndex: 5,
          mixBlendMode: "lighten",
          opacity: 0.3,
          pointerEvents: "none",
          "--mx": "-9999px",
          "--my": "-9999px",
          WebkitMaskImage:
            "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",
          maskImage:
            "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      />
    </div>
  );
}
export default HeroSection1;
