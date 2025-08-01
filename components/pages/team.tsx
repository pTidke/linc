"use client";

import HeroHeader from "@/components/hero8-header";
import Footer from "@/components/footer";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import Link from "next/dist/client/link";

export default function PeoplePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroHeader />

      <main className="flex-1 bg-background py-28 mt-4 px-14 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-[#BA0C2F] mb-12 text-center font-[Poppins]">
          Our Team
        </h1>

        <div className="grid gap-12 md:grid-cols-2 max-w-6xl mx-auto">
          {/* Director */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
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
              <div className="mt-4">
                <a
                  href="#"
                  className="inline-flex items-center text-[#BA0C2F] text-sm hover:underline"
                >
                  <Linkedin size={16} className="mr-1" /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Current Member */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
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
                Prajwal Tikde
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
                    M.S. in Construction Engineering, San Diego State University
                    (In Progress)
                  </li>
                  <li>
                    B.Tech in Computer Science & Enginerring, IIITDM Jabalpur,
                    India
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <a
                  href="#"
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
      </main>

      <Footer />
    </div>
  );
}
