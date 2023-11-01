"use client";
import Blogs from "@/components/blogs";
import Categories from "@/components/categories";
import LandingHero from "@/components/landing-hero";

export default function Home() {
  return (
    <div>
      <LandingHero />
      <Categories />
      <Blogs />
    </div>
  );
}
