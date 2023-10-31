"use client";
import Blogs from "@/components/blogs";
import Categories from "@/components/categories";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div>
      <Categories />
      <Blogs />
    </div>
  );
}
