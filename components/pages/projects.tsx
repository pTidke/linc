"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HeroHeader from "@/components/hero8-header";
import Footer from "@/components/footer";

const placeholderImage = "/placeholder-project.jpg";

const projects = [
  {
    title: "LLM-Based Mental Health Support for Construction Workers",
    description:
    "Mental health challenges such as depression, anxiety, and chronic stress are often hidden but more damaging to construction workers than any physical accident or injury. Unfortunately, many workers don’t seek help due to stigma, access barriers, or cultural attitudes. This project aims to address that gap by creating an AI-powered mental health support system, using large language models (LLMs) to offer compassionate, confidential, and 24/7 assistance tailored to the unique stressors of the construction industry. By combining insights from psychiatry, construction safety, and AI, this project introduce a scalable, culturally aware intervention that supports retention, safety, and productivity of the construction workforce.",    image: "/1.jpg",
    fields: ["Construction Engineering", "Computer Science", "Psychiatry"],
    image_credits: `Photo by <a href="https://unsplash.com/@emilyunderworld" target="_blank" rel="noopener noreferrer">Emily Underworld</a> on <a href="https://unsplash.com/photos/a-tablet-with-the-words-mental-health-matters-on-it-Ko3EMBFggok" target="_blank" rel="noopener noreferrer">Unsplash</a>`,
  },
  {
    title:
      "Wearable Sensing, Eating Behavior, and Lifestyle for Workers’ Cardiovascular Health",
    description:
    "Cardiovascular disease (CVD) is one of the leading cause of death in the U.S., and construction workers are particularly vulnerable due to intense physical labor, poor dietary habits, irregular schedules, and chronic stress. These risk factors are often compounded by limited access to preventive care and early detection. This project aims to understand how we could apply wearables to continuously tracks cardiovascular indicators—such as glucose levels, heart rate variability, physical activity, and sleep patterns—while integrating insights from eating behavior and lifestyle. Ultimately, we aim to detect early warning signs and provide personalized, real-time health guidance, enabling scalable health interventions for cardiovascular well-being in construction",      image: "/2.jpg",
    fields: [
      "Construction Engineering",
      "Human Sensing",
      "Nutritional Science",
      "Computer Science",
    ],
    image_credits: `Photo by <a href="https://unsplash.com/@lukechesser" target="_blank" rel="noopener noreferrer">Luke Chesser</a> on <a href="https://unsplash.com/photos/person-clicking-apple-watch-smartwatch-rCOWMC8qf8A" target="_blank" rel="noopener noreferrer">Unsplash</a>`,
  },
  {
    title: "Semi-Automated Teleoperation for Excavators",
    description:
     "Operating heavy machinery in construction environments demands both physical coordination and rapid decision-making, posing significant safety and productivity challenges. While full automation holds promise, current robotic systems still lack the human-like judgment and adaptability required for dynamic construction tasks. This project introduces a semi-automated teleoperation system that blends the strengths of human cognition with robotic precision. By combining eye-tracking data with machine learning, we explore how excavators could adapt to operator intent—adjusting sensitivity, task sequencing, and motion controls dynamically. The system combines input from cognitive science, robotics, and machine learning to ensure that remote operation is not only safe and efficient but also intuitive.",    image: "/3.jpg",
    fields: ["Cognitive Science", "Robotics", "Construction Engineering"],
    image_credits: `Photo by <a href="https://unsplash.com/@eesofuffzich" target="_blank" rel="noopener noreferrer">EESOFUFFZICH</a> on <a href="https://unsplash.com/photos/yellow-and-black-excavator-on-brown-sand-during-daytime-bGMyTnSlYvE" target="_blank" rel="noopener noreferrer">Unsplash</a>`,
  },
];

const fadeVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectsPage() {
  return (
    <div
      id="projects"
      className="scroll-offset-anchor min-h-screen flex flex-col"
    >
      <HeroHeader />
      <main className="flex-1 bg-background py-28 mt-4 px-4 md:px-4 lg:px-4 max-w-8xl mx-auto">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#BA0C2F] mb-12 text-center font-[Poppins]">
            Projects
          </h1>

          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className={`flex flex-col p-10 md:flex-row items-center gap-10 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              variants={fadeVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Image */}
              {/* Image with overlay */}
              <div className="relative w-full md:w-3/4">
                <Image
                  src={project.image || placeholderImage}
                  alt={project.title}
                  width={300}
                  height={220}
                  className="rounded-lg object-cover w-full shadow"
                />
                {project.image_credits && (
                  <div
                    className="absolute bottom-2 left-2 right-2 bg-white/50 backdrop-blur-xl px-3 py-1 rounded-md text-[9px] text-gray-700"
                    dangerouslySetInnerHTML={{ __html: project.image_credits }}
                  />
                )}
              </div>

              {/* Text */}
              <div className="w-full md:w-4/3">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 font-[Poppins]">
                  {project.title}
                </h2>
                <p className="text-gray-700 text-justify mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-2">
                  {project.fields.map((field, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-[#BA0C2F]/10 text-[#BA0C2F] rounded-full"
                    >
                      {field}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
