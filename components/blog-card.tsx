import { Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface BlogCardProps {
  title: string;
  description: string;
  headerImage: string;
  id: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  headerImage,
  id,
}) => {
  return (
    <div className="rounded-lg shadow-md p-4 mb-4 overflow-hidden border border-gray-600 cursor-pointer">
      <Link href={`/blog/${id}`}>
        <div>
          <Image
            src={`${headerImage}`}
            layout="fill"
            alt="image"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-2">
          <h2 className="text-xl font-semibold mb-2 overflow-ellipsis">
            {title}
          </h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
