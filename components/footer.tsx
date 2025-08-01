"use client";

import Link from "next/link";
import Image from "next/image";

const links = [
  { title: "Home", href: "/" },
  { title: "Projects", href: "/projects" },
  { title: "People", href: "/team" },
  { title: "Publications", href: "/publications" },
  { title: "Join the Team", href: "/join" },
];

export default function FooterSection() {
  return (
    <footer className="py-10 md:py-20 bg-background">
      <div className="mx-auto max-w-5xl px-6">
        {/* Logo */}
        <Link href="/" aria-label="Go home" className="mx-auto block size-fit">
          <Image
            src="/logo_full.png"
            alt="LINC logo"
            width={360}
            height={160}
            className="object-contain"
            priority
          />
        </Link>

        {/* Navigation Links */}
        <div className="my-6 flex flex-wrap justify-center gap-5 text-sm">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-muted-foreground hover:text-[#BA0C2F] transition-colors duration-150"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Footer Info */}
        <div className="max-w-xl mx-auto text-center text-sm text-gray-600 space-y-2 leading-snug">
          <p className="text-gray-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-[#BA0C2F]">LINC</span>. All
            rights reserved.
          </p>

          <div className="space-y-1">
            <p className="text-base font-semibold text-gray-800">
              JuHyeon Bae, PhD
            </p>
            <p className="text-gray-600">Assistant Professor</p>
            <p className="text-gray-600">
              Department of Civil, Construction, and Environmental Engineering
            </p>
            <p className="text-gray-600">San Diego State University</p>
            <p className="text-gray-600">
              Engineering-100F, 5500 Campanile Drive <br />
              San Diego, CA 92182
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Contact:</span>{" "}
              <a href="tel:7346444236" className="hover:underline">
                734-644-4236
              </a>{" "}
              <span className="font-medium"> | Email:</span>{" "}
              <a href="mailto:jbae3@sdsu.edu" className="hover:underline">
                jbae3@sdsu.edu
              </a>
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden whitespace-nowrap w-full mt-10">
          <div className="flex animate-marquee w-max space-x-12 text-[11px] text-gray-400">
            {/* Repeat content twice for seamless scroll */}
            {[...Array(2)].map((_, idx) => (
              <div key={idx} className="flex space-x-6">
                <span>
                  Construction Engineering –{" "}
                  <a
                    href="https://www.flaticon.com/free-icons/construction"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#BA0C2F]"
                  >
                    Freepik
                  </a>
                </span>
                <span>
                  Computer Science –{" "}
                  <a
                    href="https://www.flaticon.com/free-icons/code"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#BA0C2F]"
                  >
                    juicy_fish
                  </a>
                </span>
                <span>
                  Human Sensing –{" "}
                  <a
                    href="https://www.flaticon.com/free-icons/sensor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#BA0C2F]"
                  >
                    Flat Icons
                  </a>
                </span>
                <span>
                  Neuroscience –{" "}
                  <a
                    href="https://www.flaticon.com/free-icons/neuroscience"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#BA0C2F]"
                  >
                    SBTS2018
                  </a>
                </span>
                <span>
                  Cognitive Science –{" "}
                  <a
                    href="https://www.flaticon.com/free-icons/cognitive-training"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#BA0C2F]"
                  >
                    Dewi Sari
                  </a>
                </span>
                <span>
                  Social Psychology –{" "}
                  <a
                    href="https://www.flaticon.com/free-icons/psychology"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#BA0C2F]"
                  >
                    Flat Icons
                  </a>
                </span>
                <span>
                  Nutritional Science –{" "}
                  <a
                    href="https://www.flaticon.com/free-icons/nutrition"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#BA0C2F]"
                  >
                    Freepik
                  </a>
                </span>
                <span>
                  Psychiatry –{" "}
                  <a
                    href="https://www.flaticon.com/free-icons/psychiatry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#BA0C2F]"
                  >
                    Freepik
                  </a>
                </span>
                <span>
                  Robotics –{" "}
                  <a
                    href="https://www.flaticon.com/free-icons/robot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#BA0C2F]"
                  >
                    Flat Icons
                  </a>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
