"use client";

import HeroHeader from "@/components/hero8-header";
import Footer from "@/components/footer";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import Link from "next/dist/client/link";

export default function PeoplePage() {
  return (
    <div id="team" className="min-h-screen flex flex-col">
      <HeroHeader />

      <main className="flex-1 bg-background py-28 mt-4 px-6 md:px-12 lg:px-10 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#BA0C2F] mb-12 text-center font-[Poppins]">
            Our Team
          </h1>

          <div className="grid gap-12 md:grid-cols-2 w-full max-w-none">

            {/* Director */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 w-full">
              <div className="p-6 text-center">
                <div className="w-64 h-64 mx-auto rounded-full overflow-hidden mb-4 border-4 border-[#BA0C2F]">
                  <Image
                    src="/juhyeon-bae.jpg"
                    alt="JuHyeon Bae"
                    width={256}
                    height={256}
                    className="object-cover"
                  />
                </div>
                <h2
                  className="text-xl font-semibold"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  JuHyeon Bae, PhD
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Director, Assistant Professor
                </p>
                <p className="text-sm text-gray-500 mt-3">
                  Department of Civil, Construction, and Environmental
                  Engineering, San Diego State University
                </p>
                <div className="text-left mt-4">
                  <p className="text-sm font-medium text-gray-700 mb-1">
                    Education:
                  </p>
                  <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                    <li>
                      Ph.D. in Civil Engineering, University of Michigan – Ann
                      Arbor, 2024
                    </li>
                    <li>
                      Graduate Certificate in Computational Neuroscience, UMich,
                      2024
                    </li>
                    <li>M.S. in Civil Engineering, Hanyang University, 2020</li>
                    <li>B.S. in Civil Engineering, Hanyang University, 2018</li>
                  </ul>
                </div>
                <div className="mt-8 flex justify-center space-x-4">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/juhyeon-bae-38162122b/"
                    className="inline-flex items-center text-[#BA0C2F] text-sm hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={16} className="mr-1" />
                    LinkedIn
                  </a>

                  {/* Google Scholar */}
                  <a
                    href="https://scholar.google.com/citations?user=QBGvcr4AAAAJ&hl=en&oi=ao"
                    className="inline-flex items-center text-[#BA0C2F] text-sm hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* Scholar Icon SVG */}
                    <svg
                      className="w-4 h-4 mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      fill="currentColor"
                    >
                      <path d="M24 4L4 20l20 16 20-16L24 4zm0 3.9l15.4 12.4L24 33.4 8.6 20.3 24 7.9zM14 28v4h20v-4H14z" />
                    </svg>
                    Google Scholar
                  </a>
                </div>
              </div>
            </div>

            {/* Current Member */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 w-full">
              <div className="p-6 text-center">
                <div className="w-64 h-64 mx-auto rounded-full overflow-hidden mb-4 border-4 border-[#BA0C2F]">
                  <Image
                    src="/prajwal.jpeg"
                    alt="Prajwal Tidke"
                    width={256}
                    height={256}
                    className="object-cover"
                  />
                </div>
                <h2
                  className="text-xl font-semibold"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Prajwal Tidke
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  M.S. Student, Graduate Research Assistant
                </p>
                <p className="text-sm text-gray-500 mt-3">
                  Project: LLM-Based Mental Health Support for Construction
                  Workers
                </p>

                {/* Education Section */}
                <div className="text-left mt-4">
                  <p className="text-sm font-medium text-gray-700 mb-1">
                    Education:
                  </p>
                  <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                    <li>
                      M.S. in Big Data Analytics, San Diego State University (In
                      Progress)
                    </li>
                    <li>
                      B.Tech in Computer Science & Enginerring, IIITDM Jabalpur,
                      India
                    </li>
                  </ul>
                </div>

                <div className="mt-4">
                  <a
                    href="https://www.linkedin.com/in/ptidke9/"
                    className="inline-flex items-center text-[#BA0C2F] text-sm hover:underline"
                  >
                    <Linkedin size={16} className="mr-1" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/join">
              <button
                className="relative mt-10 px-6 py-3 rounded-full font-semibold text-white bg-[#BA0C2F] shadow-md hover:shadow-lg transition-all duration-300 hover:bg-[#a50c28] hover:scale-85
                          before:absolute before:inset-0 before:rounded-full before:blur-md before:opacity-20 before:bg-[#BA0C2F] animate-pulse"
              >
                Join the Team
              </button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
