import React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const HeroHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-3 left-1/2 transform -translate-x-1/2 z-50 w-24/28 max-w-7xl">
      <div className="bg-white/10 backdrop-blur-xl border border-black/10 rounded-xl md:rounded-full px-5 py-0.5 shadow-sm font-weight-semibold">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-left space-x-0 text-black font-bold text-3xl">
            <Link href="/" passHref>
              <Image
                src="/main.png"
                alt="LINC logo"
                width={80}
                height={40}
                className="object-contain cursor-pointer"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div
            className="hidden md:flex text-black items-center space-x-0"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <Link
              href="/"
              className="text-black/80 hover:text-black text-md transition-colors duration-200 px-3 py-3 rounded-full hover:bg-black/10"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-black/80 hover:text-black text-md transition-colors duration-200 px-3 py-3 rounded-full hover:bg-black/10"
            >
              Projects
            </Link>
            <Link
              href="/team"
              className="text-black/80 hover:text-black text-md transition-colors duration-200 px-3 py-3 rounded-full hover:bg-black/10"
            >
              People
            </Link>
            <Link
              href="/publications"
              className="text-black/80 hover:text-black text-md transition-colors duration-200 px-3 py-3 rounded-full hover:bg-black/10"
            >
              Publications
            </Link>
            <Link
              href="/join"
              className="text-black/80 hover:text-black text-md transition-colors duration-200 px-3 py-3 rounded-full hover:bg-black/10"
            >
              Join the Team
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black py-2 pt-2 m-2 rounded-full hover:bg-black/10 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="md:hidden mt-4 pt-4 py-4 border-t border-black/10"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-black/80 hover:text-black transition-colors duration-200 px-4 py-2 rounded-xl hover:bg-black/10"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-black/80 hover:text-black transition-colors duration-200 px-4 py-2 rounded-xl hover:bg-black/10"
              >
                Projects
              </Link>
              <Link
                href="/team"
                className="text-black/80 hover:text-black transition-colors duration-200 px-4 py-2 rounded-xl hover:bg-black/10"
              >
                People
              </Link>
              <Link
                href="/publications"
                className="text-black/80 hover:text-black transition-colors duration-200 px-4 py-2 rounded-xl hover:bg-black/10"
              >
                Publications
              </Link>
              <Link
                href="/join"
                className="text-black/80 hover:text-black transition-colors duration-200 px-4 py-2 rounded-xl hover:bg-black/10"
              >
                Join the Team
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default HeroHeader;
