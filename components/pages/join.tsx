"use client";

import HeroHeader from "@/components/hero8-header";
import Footer from "@/components/footer";
import { Mail } from "lucide-react";

export default function JoinTeam() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroHeader />

      <main className="flex-1 bg-background pt-18 px-10 mt-0 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-3xl sm:text-4xl mt-12 font-bold text-[#BA0C2F] mb-6"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Join the Team
          </h1>
          <p className="text-gray-700 text-sm md:text-lg mb-10 leading-relaxed text-justify">
            We are looking for a <strong className="text-[#BA0C2F]">fully-funded Ph.D. student</strong> to join LINC starting September 2026. The position is part of a <strong>joint doctoral program</strong> between <strong>SDSU</strong> and <strong>UCSD</strong>. Come explore human-centered construction research at the intersection of <strong>engineering, neuroscience, AI, psychology, and robotics</strong>.
          </p>

          <div className="text-left bg-white p-6 rounded-xl shadow-md space-y-6 border border-gray-200">
            <div>
              <h2 className="text-md font-semibold text-[#BA0C2F] mb-2">Required Qualifications:</h2>
              <ul className="space-y-2 text-sm text-gray-800 list-disc list-inside">
                <li><strong>Interdisciplinary Curiosity</strong> (Top priority)</li>
                <li>Eagerness to connect theory with real-world challenges in construction, health, or technology</li>
                <li>Collaboration and Communication Skills</li>
                <li>Technical Proficiency (e.g., ML, LLM, wearable sensing, robotics, etc.)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-md font-semibold text-[#BA0C2F] mb-2">Sample Research Projects:</h2>
              <ul className="space-y-2 text-sm text-gray-800 list-disc list-inside">
                <li>LLM-based mental health support for construction workers</li>
                <li>Psychophysiological monitoring for safety and productivity</li>
                <li>Cognitive & emotional mechanisms in human-robot collaboration</li>
              </ul>
            </div>

            <div>
              <h2 className="text-md font-semibold text-[#BA0C2F] mb-2">Application Instructions:</h2>
              <p className="text-gray-800 text-sm">
                Email Dr. JuHyeon Bae at{" "}
                <a
                  href="mailto:jbae3@sdsu.edu"
                  className="text-[#BA0C2F] font-medium underline hover:text-red-700"
                >
                  jbae3@sdsu.edu
                </a>{" "}
                with your CV and a brief explanation of why you&apos;re a great fit for LINC.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <a
              href="mailto:jbae3@sdsu.edu"
              className="inline-flex items-center px-6 py-3 rounded-full bg-[#BA0C2F] text-white font-semibold hover:bg-[#a50c28] transition-all shadow-lg hover:shadow-xl"
            >
              <Mail className="mr-2" size={18} /> Contact Dr. Bae
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
