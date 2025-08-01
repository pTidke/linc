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
      "Mental health challenges such as depression, anxiety, and chronic stress are often hidden but more damaging to construction workers than any physical accident or injury. This project creates an AI-powered mental health support system using LLMs to offer compassionate, confidential, and 24/7 assistance tailored to the unique stressors of the construction industry.",
    image: "/1.jpg",
    fields: ["Construction Engineering", "Computer Science", "Psychiatry"],
    image_credits: `Photo by <a href="https://unsplash.com/@emilyunderworld" target="_blank" rel="noopener noreferrer">Emily Underworld</a> on <a href="https://unsplash.com/photos/a-tablet-with-the-words-mental-health-matters-on-it-Ko3EMBFggok" target="_blank" rel="noopener noreferrer">Unsplash</a>`
  },
  {
    title:
      "Wearable Sensing, Eating Behavior, and Lifestyle for Cardiovascular Health",
    description:
      "Construction workers face unique cardiovascular risks due to labor, diet, and stress. This project uses wearables and behavioral sensing to monitor health indicators like glucose, HRV, and sleep—guiding real-time, proactive interventions via machine learning insights.",
    image: "/2.jpg",
    fields: [
      "Construction Engineering",
      "Human Sensing",
      "Nutritional Science",
      "Computer Science",
    ],
    image_credits: `Photo by <a href="https://unsplash.com/@lukechesser" target="_blank" rel="noopener noreferrer">Luke Chesser</a> on <a href="https://unsplash.com/photos/person-clicking-apple-watch-smartwatch-rCOWMC8qf8A" target="_blank" rel="noopener noreferrer">Unsplash</a>`
  },
  {
    title: "Semi-Automated Teleoperation for Excavators",
    description:
      "To reduce risk and improve control in hazardous environments, this project creates a semi-automated teleoperation system that blends eye-tracking, ML, and human-in-the-loop robotics for safer, intuitive excavator control.",
    image: "/3.jpg",
    fields: ["Cognitive Science", "Robotics", "Construction Engineering"],
    image_credits: `Photo by <a href="https://unsplash.com/@eesofuffzich" target="_blank" rel="noopener noreferrer">EESOFUFFZICH</a> on <a href="https://unsplash.com/photos/yellow-and-black-excavator-on-brown-sand-during-daytime-bGMyTnSlYvE" target="_blank" rel="noopener noreferrer">Unsplash</a>`
  },
];

const fadeVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroHeader />
        <main className="flex-1 bg-background py-24 px-12 mt-10 md:px-12 lg:px-12 space-y-24 max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-16 text-[#BA0C2F] font-[Poppins]">
          Our Projects
        </h1>

        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            variants={fadeVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Image */}
            <div className="w-full md:w-5/12">
              <Image
                src={project.image || placeholderImage}
                alt={project.title}
                width={300}
                height={220}
                className="rounded-lg object-cover w-full shadow"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-4/3">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3 font-[Poppins]">
                {project.title}
              </h2>
              <p className="text-gray-700 mb-4 text-sm">{project.description}</p>

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

              {/* Image credits */}
              {project.image_credits && (
                <p
                  className="text-xs ml-2 text-gray-400"
                  dangerouslySetInnerHTML={{ __html: project.image_credits }}
                />
              )}
            </div>
          </motion.div>
        ))}
      </main>
      <Footer />
    </div>
  );
}
