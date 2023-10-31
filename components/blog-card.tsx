import Link from "next/link";
import React from "react";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  description: string;
  headerImage: string;
  id: string;
  author: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  headerImage,
  id,
  author,
}) => {
  const shortDescription = description.substring(0, 150) + "...";
  return (
    <div className="rounded-lg shadow-md p-4 mb-4 overflow-hidden border border-gray-600 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300">
      <Link href={`/blog/${id}`}>
        <div className="relative w-full h-1" style={{ paddingBottom: "100%" }}>
          <Image
            src={`${headerImage}`}
            alt="image"
            className="rounded-t-lg"
            fill
            objectFit="cover"
          />
        </div>
        <div className="p-2">
          <h2 className="text-xl font-semibold mb-2 overflow-ellipsis">
            {title}
          </h2>
          <h2 className="text-l font-semibold italic mb-2 overflow-ellipsis ">
            Author: {author}
          </h2>
          <p className="text-gray-600">{shortDescription}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
