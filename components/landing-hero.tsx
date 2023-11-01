"use client";

import TypewriterComponent from "typewriter-effect";

export default function LandingHero() {
  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold text-[#f0be5b]">
        <h1>BZ Blog</h1>
        <div className="text-sm md:text-2xl font-light text-zinc-200 ">
          Blog by Brandon Zewe discussing the stars and beyond
        </div>
        <div className="text-[#f0be5b] h-40  ">
          <TypewriterComponent
            options={{
              strings: [
                "Galaxies",
                "Nebulae",
                "Stars",
                "Supernovae",
                "Star Clusters",
                "Solar Systems",
                "Astrophysics",
                "Cosmology",
                "Black Holes",
                "Dark Matter",
                "Dark Energy",
                "Exoplanets",
                "Extraterrestrial Life",
                "Space Exploration",
                "Space Travel",
                "Space Technology",
                "Space Tourism",
                "Space Colonization",
                "Space Mining",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </div>
  );
}
