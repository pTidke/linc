"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroHeader from "@/components/hero8-header";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { OrbitingCircles } from "./magicui/orbiting-circles";

const thrusts = [
  {
    title: "LLM-Based Mental Health Support for Construction Workers",
    description:
      "Harnessing the power of LLMs to deliver personalized, confidential mental health support for construction workers.",
    disciplines: ["Construction Engineering", "Computer Science", "Psychiatry"],
  },
  {
    title:
      "Wearable Sensing, Eating Behavior, and Lifestyle for Workers’ Cardiovascular Health",
    description:
      "Understanding worker health with smart wearables that monitor, analyze, and guide cardiovascular wellness on the job.",
    disciplines: [
      "Construction Engineering",
      "Computer Science",
      "Human Sensing",
      "Nutritional Science",
    ],
  },
  {
    title: "Semi-Automated Teleoperation for Excavators",
    description:
      "Combining robotics and cognitive science to enable safer, remote construction operations.",
    disciplines: [
      "Construction Engineering",
      "Computer Science",
      "Cognitive Science",
      "Robotics",
    ],
  },
];

export default function HeroSection() {
  const [activeThrustIndex, setActiveThrustIndex] = useState(0);
  const iconRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const centerRef = useRef<HTMLDivElement | null>(null);
  const lineSvgRef = useRef<SVGSVGElement | null>(null);
  const thrustPanelRef = useRef<HTMLDivElement | null>(null);
  const centerIconRef = useRef<HTMLImageElement | null>(null); // Add this ref

  // Animation frame ref to control the loop
  const animationFrameRef = useRef<number | null>(null);

  // Function to draw lines
  const drawLines = () => {
    if (!lineSvgRef.current || !centerIconRef.current) return;

    const svg = lineSvgRef.current;
    svg.innerHTML = ""; // clear previous

    // Use the central icon's bounding box
    const centerBox = centerIconRef.current.getBoundingClientRect();
    const centerX = centerBox.left + centerBox.width / 2;
    const centerY = centerBox.top + centerBox.height / 2;

    const currentThrust = thrusts[activeThrustIndex];

    currentThrust?.disciplines.forEach((field) => {
      const targetEl = iconRefs.current[field];
      if (!targetEl) return;

      const box = targetEl.getBoundingClientRect();
      const targetX = box.left + box.width / 2;
      const targetY = box.top + box.height / 2;

      const svgBox = svg.getBoundingClientRect();
      const x1 = centerX - svgBox.left;
      const y1 = centerY - svgBox.top;
      const x2 = targetX - svgBox.left;
      const y2 = targetY - svgBox.top;

      const line = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line"
      );
      line.setAttribute("x1", x1.toString());
      line.setAttribute("y1", y1.toString());
      line.setAttribute("x2", x2.toString());
      line.setAttribute("y2", y2.toString());
      line.setAttribute("stroke", "#BA0C2F");
      line.setAttribute("stroke-width", "1");
      line.setAttribute("stroke-linecap", "round");

      svg.appendChild(line);
      gsap.to(line, {
        attr: { x2, y2 },
        duration: 1,
        ease: "power2.out",
      });
    });
  };

  // Continuously update lines as icons move
  useEffect(() => {
    const animate = () => {
      drawLines();
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [activeThrustIndex]);

  // Add this effect for auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveThrustIndex((prev) => (prev + 1) % thrusts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section>
          <div className="pb-0 pt-24 pl-8 pr-8 lg:pt-8 lg:pb-0">
            <div className="relative mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-between px-0 py-0 lg:gap-36">
              {/* Text Block */}
              <div className="max-w-3xl text-center lg:text-left lg:w-1/2 pb-0 mx-auto">
                <h1
                  className="mt-6 lg:mt-16 text-2xl sm:text-2xl md:text-4xl xl:text-4xl font-bold leading-tight tracking-tight"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  <span className="block">
                    <span className="text-[#BA0C2F]">L</span>aboratory for
                  </span>
                  <span className="block">
                    <span className="text-[#BA0C2F]">In</span>terdisciplinary
                    Research in
                  </span>
                  <span className="block">
                    <span className="text-[#BA0C2F]">C</span>onstruction
                  </span>
                </h1>

                <p
                  className="mt-6 mx-2 text-md sm:text-s text-justify text-gray-600 max-w-2xl  lg:mx-0 leading-relaxed"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                  }}
                >
                  At LINC, we bring together diverse disciplines — from
                  construction engineering and AI to cognitive science and
                  robotics — to tackle critical challenges in construction. By
                  blending technological innovation with deep insight into human
                  systems, we generate new knowledge to build safer, healthier,
                  and more productive construction environments.
                </p>

                <div className="mt-6 flex flex-row flex-wrap gap-2 justify-center lg:justify-start">
                  <Link href="/projects">
                    <Button className="bg-[#BA0C2F] text-white hover:bg-[#a50c28] transition-colors duration-200 px-6 py-3 text-sm font-semibold rounded-full">
                      Explore Research
                    </Button>
                  </Link>

                  <Link href="/publications">
                    <Button
                      variant="outline"
                      className="border-[#BA0C2F] text-[#BA0C2F] hover:bg-[#BA0C2F]/10 transition-colors duration-200 px-6 py-3 text-sm font-semibold rounded-full"
                    >
                      Explore Publications
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Network */}
              <div className="w-[400px] h-[400px] sm:w-[360px] sm:h-[360px] md:w-[500px] md:h-[500px] -mt-8 mb-16 lg:mt-16 items-center justify-center relative">
                <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
                  <svg
                    ref={lineSvgRef}
                    className="absolute inset-0 z-0 w-full h-full pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                  />
                  <OrbitingCircles iconSize={90}>
                    {[
                      {
                        src: "/icons/computer-science.png",
                        alt: "Computer Science",
                      },
                      { src: "/icons/human-sensing.png", alt: "Human Sensing" },
                      { src: "/icons/neuroscience.png", alt: "Neuroscience" },
                      {
                        src: "/icons/cognitive-science.png",
                        alt: "Cognitive Science",
                      },
                      {
                        src: "/icons/social-psychology.png",
                        alt: "Social Psychology",
                      },
                      {
                        src: "/icons/nutritional-science.png",
                        alt: "Nutritional Science",
                      },
                      { src: "/icons/psychiatry.png", alt: "Psychiatry" },
                      { src: "/icons/robotics.png", alt: "Robotics" },
                    ].map(({ src, alt }, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center text-center"
                        ref={(el) => {
                          iconRefs.current[alt] = el;
                        }}
                      >
                        <Image
                          src={src}
                          alt={alt}
                          width={60}
                          height={60}
                          className="rounded-full border border-[#BA0C2F] bg-white p-3"
                        />
                        <span
                          className="mt-1 text-[10px] font-medium text-gray-700 max-w-[70px] leading-tight rounded-lg px-2 py-1"
                          style={{
                            background: "rgba(255,255,255,0.7)",
                            backdropFilter: "blur(6px)",
                            WebkitBackdropFilter: "blur(6px)",
                          }}
                        >
                          {alt}
                        </span>
                      </div>
                    ))}
                  </OrbitingCircles>

                  {/* Center icon */}
                  <div
                    ref={centerRef}
                    className="absolute z-10 flex flex-col items-center text-center"
                  >
                    <Image
                      ref={centerIconRef}
                      src="/icons/construction.png"
                      alt="Construction Engineering"
                      width={60}
                      height={60}
                      className="object-contain rounded-full border border-[#BA0C2F] bg-white p-2"
                    />
                    <span
                      className="mt-2 text-xs font-semibold text-gray-800 w-[80px] leading-tight rounded-lg px-2 py-1"
                      style={{
                        background: "rgba(255,255,255,0.7)",
                        backdropFilter: "blur(6px)",
                        WebkitBackdropFilter: "blur(6px)",
                      }}
                    >
                      Construction Engineering
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={thrustPanelRef}
          className="bg-background py-0 px-10 md:pt-0 md:pb-10"
        >
          <div className="mx-auto max-w-6xl">
            <div className="flex items-start gap-6">
              {/* ✅ Fixed Research Thrusts Card */}
              <div className="hidden md:block w-full my-1 max-w-[220px] flex-shrink-0 rounded-xl bg-[#BA0C2F] text-white p-6 text-center shadow-sm border-2 border-[#BA0C2F] min-h-[220px] flex flex-col justify-center">
                <h2
                  className="text-xl font-semibold mb-2 leading-snug"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Research Thrusts
                </h2>
                <p className="text-sm text-white/90">
                  Explore interdisciplinary domains combining construction, AI,
                  and human sciences.
                </p>
              </div>

              {/* 🔁 Desktop: Scrollable Marquee Section */}
              <div className="hidden md:block relative w-full overflow-x-hidden">
                <div className="flex w-max animate-marquee my-1 gap-6 animation-delay-[4s]">
                  {[...Array(2)].flatMap((_, groupIndex) =>
                    thrusts.map((t, idx) => (
                      <div
                        key={`${t.title}-${groupIndex}`}
                        className={cn(
                          "w-full max-w-[300px] flex-shrink-0 rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md",
                          activeThrustIndex === idx
                            ? "border-[#BA0C2F] ring-1 ring-[#BA0C2F]/50"
                            : "border-gray-200"
                        )}
                      >
                        <div className="flex flex-col justify-start h-full text-left">
                          <div className="text-base font-semibold text-gray-900 mb-2 break-words leading-tight">
                            {t.title}
                          </div>
                          <p className="text-sm text-gray-600">
                            {t.description}
                          </p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* 📱 Mobile: Header + Single rotating thrust card */}
            <div className="block md:hidden mt-0">
              <h3
                className="text-center text-lg font-semibold text-[#BA0C2F] mb-4"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Research Thrusts
              </h3>
              <div
                className={cn(
                  "w-full max-w-sm mx-auto rounded-xl border bg-white p-6 mb-6 shadow-sm transition hover:shadow-md",
                  "border-[#BA0C2F] ring-1 ring-[#BA0C2F]/50"
                )}
              >
                <div className="flex flex-col justify-start h-full text-left">
                  <div className="text-base font-semibold text-gray-900 mb-2 break-words leading-tight">
                    {thrusts[activeThrustIndex].title}
                  </div>
                  <p className="text-sm text-gray-600">
                    {thrusts[activeThrustIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
