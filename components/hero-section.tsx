"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroHeader from "@/components/hero8-header";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { cn } from "@/lib/utils";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const IntegrationCard = ({
  children,
  className,
  isCenter = false,
}: {
  children: React.ReactNode;
  className?: string;
  position?:
    | "left-top"
    | "left-middle"
    | "left-bottom"
    | "right-top"
    | "right-middle"
    | "right-bottom";
  isCenter?: boolean;
}) => {
  return (
    <div
      className={cn(
        "relative z-30 flex size-16 rounded-full border border-black bg-white shadow-sm shadow-black/5 dark:bg-white/5 dark:backdrop-blur-md",
        className
      )}
    >
      <div className={cn("m-auto size-fit *:size-6", isCenter && "*:size-10")}>
        {children}
      </div>
    </div>
  );
};

export default function HeroSection() {
  const orbRef = useRef<HTMLDivElement>(null);
  const [setActiveThrust] = useState<string | null>(null);
  const thrustPanelRef = useRef<HTMLDivElement>(null);
  const [emojiAnimationDone, setEmojiAnimationDone] = useState(false);
  const lineSvgRef = useRef<SVGSVGElement | null>(null);
  const centerRef = useRef<HTMLImageElement>(null);
  const emojiRefs = useRef<Record<string, HTMLDivElement | null>>({
    "💻": null,
    "📡": null,
    "🧠": null,
    "🧩": null,
    "🗣️": null,
    "🥗": null,
    "🧑‍⚕️": null,
    "🤖": null,
  });

  const disciplineIcons = {
    "💻": "computer-science.png",
    "📡": "human-sensing.png",
    "🧠": "neuroscience.png",
    "🧩": "cognitive-science.png",
    "🗣️": "social-psychology.png",
    "🥗": "nutritional-science.png",
    "🧑‍⚕️": "psychiatry.png",
    "🤖": "robotics.png",
    "🏗️": "construction.png",
  };

  const thrusts = [
    {
      title: "LLM-Based Mental Health Support for Construction Workers",
      disciplines: ["🏗️", "💻", "🧑‍⚕️"],
      description:
        "Harnessing the power of large language models to deliver personalized, confidential mental health support for construction workers.",
    },
    {
      title:
        "Wearable Sensing, Eating Behavior, and Lifestyle for Cardiovascular Health",
      disciplines: ["🏗️", "💻", "📡", "🥗"],
      description:
        "Revolutionizing worker health with smart wearables that monitor, analyze, and guide cardiovascular wellness on the job",
    },
    {
      title: "Semi-Automated Teleoperation for Excavators",
      disciplines: ["🏗️", "💻", "🧩", "🤖"],
      description:
        "Blending robotics and cognitive science to enable safer, smarter remote operation of construction machinery.",
    },
  ];

  // Inside your component
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [activeThrustIndex, setActiveThrustIndex] = useState(1);

  const activeThrust = thrusts[activeThrustIndex]?.title;

  useEffect(() => {
    const isMobile = window.innerWidth < 400; // Tailwind's md breakpoint
    const intervalDuration = isMobile ? 3000 : 9000; // faster on mobile

    const interval = setInterval(() => {
      setActiveThrustIndex((prev) => (prev + 1) % thrusts.length);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, []);

  const disciplineNameMap: Record<string, string> = {
    "🏗️": "Construction Engineering",
    "💻": "Computer Science",
    "📡": "Human Sensing",
    "🧠": "Neuroscience",
    "🧩": "Cognitive Science",
    "🗣️": "Social Psychology",
    "🥗": "Nutritional Science",
    "🧑‍⚕️": "Psychiatry",
    "🤖": "Robotics",
  };

  const centerIsActive = activeThrust
    ? thrusts.find((t) => t.title === activeThrust)?.disciplines.includes("🏗️")
    : false;

  useEffect(() => {
    if (!orbRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => setEmojiAnimationDone(true),
    });

    tl.from(orbRef.current.querySelectorAll(".gsap-circle"), {
      opacity: 0,
      scale: 0.5,
      y: 20,
      duration: 1,
      ease: "power2.out",
      stagger: 0.1,
    });
  }, []);

  useEffect(() => {
    if (!orbRef.current) return;

    const emojis = orbRef.current.querySelectorAll(".gsap-emoji");

    emojis.forEach((el) => {
      const emoji = el.textContent?.trim();

      // Check if emoji is linked to selected thrust
      const isActive = activeThrust
        ? thrusts
            .find((t) => t.title === activeThrust)
            ?.disciplines.includes(emoji ?? "")
        : false;

      // Apply or remove highlight styles
      gsap.to(el, {
        scale: isActive ? 1.3 : 1,
        // boxShadow: isActive ? "0 0 12px #BA0C2F" : "none",
        duration: 0.3,
        ease: "power2.out",
      });
    });
  }, [activeThrust]);

  useEffect(() => {
    if (!orbRef.current) return;

    const emojis = orbRef.current.querySelectorAll(".gsap-emoji");

    emojis.forEach((el) => {
      const emoji = el.textContent?.trim();

      // Check if emoji is linked to selected thrust
      const isActive = activeThrust
        ? thrusts
            .find((t) => t.title === activeThrust)
            ?.disciplines.includes(emoji ?? "")
        : false;

      // Apply or remove highlight styles
      gsap.to(el, {
        scale: isActive ? 1.3 : 1,
        // boxShadow: isActive ? "0 0 12px #BA0C2F" : "none",
        duration: 0.3,
        ease: "power2.out",
      });
    });
  }, [activeThrust]);

  useEffect(() => {
    if (
      !activeThrust ||
      !lineSvgRef.current ||
      !centerRef.current ||
      !emojiAnimationDone
    )
      return;

    const svg = lineSvgRef.current;
    svg.innerHTML = ""; // Clear old lines

    const centerBox = centerRef.current.getBoundingClientRect();
    const centerX = centerBox.left + centerBox.width / 2;
    const centerY = centerBox.top + centerBox.height / 2;

    const disciplines =
      thrusts.find((t) => t.title === activeThrust)?.disciplines || [];

    disciplines.forEach((emoji) => {
      const targetEl = emojiRefs.current[emoji];
      if (!targetEl) return;

      const targetBox = targetEl.getBoundingClientRect();
      const targetX = targetBox.left + targetBox.width / 2;
      const targetY = targetBox.top + targetBox.height / 2;

      const svgBox = svg.getBoundingClientRect();
      const relX1 = centerX - svgBox.left;
      const relY1 = centerY - svgBox.top;
      const relX2 = targetX - svgBox.left;
      const relY2 = targetY - svgBox.top;

      // Create SVG line
      const line = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line"
      );
      line.setAttribute("x1", `${relX1}`);
      line.setAttribute("y1", `${relY1}`);
      line.setAttribute("x2", `${relX1}`); // Start collapsed at center
      line.setAttribute("y2", `${relY1}`);
      line.setAttribute("stroke", "#BA0C2F");
      line.setAttribute("stroke-width", "2");
      line.setAttribute("stroke-linecap", "round");

      svg.appendChild(line);

      // Animate line outward using GSAP
      gsap.to(line, {
        attr: { x2: relX2, y2: relY2 },
        duration: 0.6,
        ease: "power2.out",
        delay: 0.1,
      });
    });
  }, [activeThrust, emojiAnimationDone]);

  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section>
          <div className="pb-10 pt-24 pl-8 pr-8 lg:pt-30 lg:pb-30">
            <div className="relative mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-between px-0 py-0 lg:gap-36">
              {/* Text Block */}
              <div className="max-w-3xl text-center lg:text-left lg:w-1/2 pb-0 mx-auto">
                <h1
                  className="mt-6 lg:mt-12 text-2xl sm:text-2xl md:text-4xl xl:text-4xl font-bold leading-tight tracking-tight"
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
                  className="mt-6 text-md sm:text-s text-justify text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
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

                <div className="mt-10 flex flex-row flex-wrap gap-4 justify-center lg:justify-start">
                  <Link href="/research">
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
              <div className="w-full lg:w-1/2 h-[200px] sm:h-[240px] md:h-[300px] items-center justify-center relative pt-6 px-4 sm:px-6 md:px-10 lg:mt-16">
                <div
                  ref={orbRef}
                  className="aspect-square group relative mx-auto flex w-[240px] sm:w-[300px] md:w-[400px] items-center justify-between mt-10 md:mt-0"
                >
                  <svg
                    ref={lineSvgRef}
                    className="absolute inset-0 z-0 w-full h-full pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                  />
                  {/* Outer Rings */}
                  <div
                    role="presentation"
                    className="bg-linear-to-b border-foreground/5 absolute -inset-4 z-10 aspect-square items-center justify-center rounded-full border-t from-lime-500/15 to-transparent to-25% opacity-0 duration-[3.5s] group-hover:opacity-100 dark:from-white/5"
                  />
                  <div
                    role="presentation"
                    className="bg-linear-to-b border-foreground/5 absolute inset-12 sm:inset-14 z-10 aspect-square scale-90 items-center justify-center rounded-full border-t from-blue-500/15 to-transparent to-25% opacity-0 duration-[3.5s] group-hover:opacity-100"
                  />

                  {/* Outer Ring Emojis */}
                  <div className="bg-linear-to-b from-muted-foreground/15 absolute -inset-4 flex aspect-square items-center justify-center rounded-full border-t to-transparent to-25% gsap-circle">
                    {[
                      {
                        emoji: "💻",
                        label: "Computer Science",
                        className:
                          "-translate-x-8 absolute left-0 top-1/2 -translate-y-14 gsap-emoji",
                      },
                      {
                        emoji: "📡",
                        label: "Human Sensing",
                        className:
                          "translate-x-6 absolute left-0 top-1/4 -translate-y-16 gsap-emoji",
                      },
                      {
                        emoji: "🧠",
                        label: "Neuroscience",
                        className: "absolute top-0 -translate-y-1/2 gsap-emoji",
                      },
                      {
                        emoji: "🧩",
                        label: "Cognitive Science",
                        className:
                          "translate-x-8 absolute right-0 top-1/2 -translate-y-14 gsap-emoji",
                      },
                      {
                        emoji: "🗣️",
                        label: "Social Psychology",
                        className:
                          "-translate-x-6 absolute right-0 top-1/4 -translate-y-16 gsap-emoji",
                      },
                    ].map(({ emoji, label, className }, idx) => {
                      const isActive = activeThrust
                        ? thrusts
                            .find((t) => t.title === activeThrust)
                            ?.disciplines.includes(emoji)
                        : false;

                      return (
                        <IntegrationCard
                          key={idx}
                          className={cn(className, "gsap-circle", {
                            "border-2 border-[#BA0C2F] ring-2 ring-[#BA0C2F]/50 scale-110":
                              isActive,
                          })}
                        >
                          <div className="group relative flex items-center justify-center gsap-circle">
                            {/* <div className="text-2xl gsap-circle">{emoji}</div> */}
                            {/* <div
                              ref={(el) => {
                                emojiRefs.current[emoji] = el;
                              }}
                              className="text-2xl gsap-emoji"
                            >
                              {emoji}
                            </div> */}
                            <Image
                              ref={(el) => {
                                emojiRefs.current[emoji] = el;
                              }}
                              src={`/icons/${
                                disciplineIcons[
                                  emoji as keyof typeof disciplineIcons
                                ]
                              }`}
                              alt={label}
                              width={50}
                              height={50}
                              className="gsap-emoji"
                            />

                            <span
                              className={cn(
                                "absolute -top-12 px-2 py-1 text-xs rounded-full text-black bg-white shadow transition-opacity whitespace-nowrap z-20",
                                isActive
                                  ? "opacity-90"
                                  : "opacity-0 group-hover:opacity-80"
                              )}
                            >
                              {label}
                            </span>
                          </div>
                        </IntegrationCard>
                      );
                    })}
                  </div>

                  {/* Inner Ring Emojis */}
                  <div className="gsap-circle bg-linear-to-b from-muted-foreground/15 absolute inset-12 lg:inset-18 flex aspect-square scale-100 items-center justify-center rounded-full border-t to-transparent to-25%">
                    {[
                      {
                        emoji: "🥗",
                        label: "Nutritional Science",
                        className: "absolute top-0 -translate-y-1/2 gsap-emoji",
                      },
                      {
                        emoji: "🧑‍⚕️",
                        label: "Psychiatry",
                        className:
                          "absolute left-0 top-1/4 -translate-x-1/4 -translate-y-1/4 gsap-emoji",
                      },
                      {
                        emoji: "🤖",
                        label: "Robotics",
                        className:
                          "absolute right-0 top-1/4 -translate-y-1/4 translate-x-1/4 gsap-emoji",
                      },
                    ].map(({ emoji, label, className }, idx) => {
                      const isActive = activeThrust
                        ? thrusts
                            .find((t) => t.title === activeThrust)
                            ?.disciplines.includes(emoji)
                        : false;

                      return (
                        <IntegrationCard
                          key={idx}
                          className={cn(className, "gsap-circle", {
                            "border-2 border-[#BA0C2F] ring-2 ring-[#BA0C2F]/50 scale-110":
                              isActive,
                          })}
                        >
                          <div className="group relative flex items-center justify-center">
                            {/* <div className="text-2xl gsap-circle">{emoji}</div> */}
                            {/* <div
                              ref={(el) => {
                                emojiRefs.current[emoji] = el;
                              }}
                              className="text-2xl gsap-emoji"
                            >
                              {emoji}
                            </div> */}
                            <Image
                              ref={(el) => {
                                emojiRefs.current[emoji] = el;
                              }}
                              src={`/icons/${
                                disciplineIcons[
                                  emoji as keyof typeof disciplineIcons
                                ]
                              }`}
                              alt={label}
                              width={50}
                              height={50}
                              className="gsap-emoji"
                            />

                            <span
                              className={cn(
                                "absolute -top-12 px-2 py-1 text-xs rounded-full text-black bg-white shadow transition-opacity whitespace-nowrap z-20",
                                isActive
                                  ? "opacity-90"
                                  : "opacity-0 group-hover:opacity-80"
                              )}
                            >
                              {label}
                            </span>
                          </div>
                        </IntegrationCard>
                      );
                    })}
                  </div>

                  {/* Center Node: Construction 🏗️ */}
                  <div className="absolute inset-x-0 bottom-0 mx-auto my-2 flex w-fit justify-center gap-2">
                    <div className="gsap-circle gsap-emoji bg-muted relative z-20 mb-4 sm:mb-42 rounded-full border p-1">
                      <IntegrationCard
                        className={cn(
                          "shadow-black-950/10 dark:bg-background size-16 border-black/20 shadow-xl dark:border-white/25 dark:shadow-white/15",
                          {
                            "border-[#BA0C2F] ring-2 ring-[#BA0C2F]/50 scale-110":
                              centerIsActive,
                          }
                        )}
                        isCenter
                      >
                        <div className="group relative flex items-center justify-center">
                          {/* <div className="text-center text-4xl">🏗️</div> */}
                          {/* <div ref={centerRef} className="text-center text-4xl">
                            🏗️
                          </div> */}
                          <Image
                            ref={centerRef}
                            src="/icons/construction.png"
                            alt="Construction Engineering"
                            width={40}
                            height={40}
                            className="text-center"
                          />

                          <span
                            className={cn(
                              "absolute -bottom-11 px-2 py-1 text-xs rounded-full text-black bg-white shadow transition-opacity whitespace-nowrap z-20",
                              centerIsActive
                                ? "opacity-90"
                                : "opacity-0 group-hover:opacity-80"
                            )}
                          >
                            Construction Engineering
                          </span>
                        </div>
                      </IntegrationCard>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden md:block group absolute mx-auto max-w-3xl ml-152 mt-100 px-6">
                <div className="flex flex-col md:flex-row items-start md:items-center">
                  {/* Sliding Chips */}
                  <div className="relative py-2 md:w-[calc(100%-11rem)] w-full">
                    <InfiniteSlider speedOnHover={20} speed={40} gap={36}>
                      {[
                        "Computer Science",
                        "Human Sensing",
                        "Neuroscience",
                        "Cognitive Science",
                        "Social Psychology",
                        "Nutritional Science",
                        "Psychiatry",
                        "Robotics",
                      ].map((discipline, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-center px-4 py-2 rounded-full border border-[#BA0C2F]/40 bg-white text-black text-sm font-semibold whitespace-nowrap"
                        >
                          {discipline}
                        </div>
                      ))}
                    </InfiniteSlider>

                    {/* Edge Fade Effects */}
                    <div className="bg-gradient-to-r from-background via-background to-transparent absolute inset-y-0 left-0 w-30 z-10" />
                    <div className="bg-gradient-to-l from-background via-background to-transparent absolute inset-y-0 right-0 w-30 z-10" />

                    <ProgressiveBlur
                      className="pointer-events-none absolute left-0 top-0 h-full w-20"
                      direction="left"
                      blurIntensity={1}
                    />
                    <ProgressiveBlur
                      className="pointer-events-none absolute right-0 top-0 h-full w-20"
                      direction="right"
                      blurIntensity={1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Infinite Slider Section */}
        <section className="block lg:hidden bg-background mt-2 pt-20 pb-6 md:pb-32">
          <div className="group relative mx-auto max-w-3xl px-6">
            <div className="flex flex-col md:flex-row items-start md:items-center">
              {/* Static Label */}
              {/* <div className="md:max-w-64 md:border-r md:pr-6 shrink-10 w-full md:w-auto mb-6 md:mb-0">
                <p className="text-md font-semibold text-black whitespace-nowrap">
                  Interdisciplinary Fields
                </p>
              </div> */}

              {/* Sliding Chips */}
              <div className="relative py-2 md:w-[calc(100%-11rem)] w-full">
                <InfiniteSlider speedOnHover={20} speed={40} gap={36}>
                  {[
                    "Computer Science",
                    "Human Sensing",
                    "Neuroscience",
                    "Cognitive Science",
                    "Social Psychology",
                    "Nutritional Science",
                    "Psychiatry",
                    "Robotics",
                  ].map((discipline, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center px-4 py-2 rounded-full border border-[#BA0C2F]/40 bg-white text-black text-sm font-semibold whitespace-nowrap"
                    >
                      {discipline}
                    </div>
                  ))}
                </InfiniteSlider>

                {/* Edge Fade Effects */}
                <div className="bg-gradient-to-r from-background via-background to-transparent absolute inset-y-0 left-0 w-30 z-10" />
                <div className="bg-gradient-to-l from-background via-background to-transparent absolute inset-y-0 right-0 w-30 z-10" />

                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
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
              <div className="hidden md:block w-full max-w-[220px] flex-shrink-0 rounded-xl bg-[#BA0C2F] text-white p-6 text-center shadow-sm border-2 border-[#BA0C2F] min-h-[220px] flex flex-col justify-center">
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

              {/* 🔁 Scrollable Marquee Section */}
              <div className="relative w-full overflow-x-hidden">
                <div className="flex w-max animate-marquee gap-6 animation-delay-[4s]">
                  {[...Array(2)].flatMap((_, groupIndex) =>
                    thrusts.map((t, idx) => (
                      <div
                        key={`${t.title}-${groupIndex}`}
                        className={cn(
                          "w-full max-w-[300px] flex-shrink-0 rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md",
                          activeThrustIndex === idx
                            ? "border-[#BA0C2F] ring-1 ring-[#BA0C2F]/40"
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
          </div>
        </section>
      </main>
    </>
  );
}
