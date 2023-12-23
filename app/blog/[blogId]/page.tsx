import Gallery, { GalleryProps } from "@/components/gallery/gallery";
import { pb, pocketBaseURL } from "@/entities/pocketBase";
import { BlogProps } from "@/entities/types";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: {
    blogId: string;
  };
}

const Page: React.FC<PageProps> = async ({
  params,
}: {
  params: {
    blogId: string;
  };
}) => {
  const blog: BlogProps = await pb.collection("blogs").getOne(params.blogId);
  console.log(blog);

  return (
    <div className="max-w-3xl mx-auto-p-4 ">
      <Link href={"/"} className="p-4 pl-0 pb-10 text-[#f0be5b]">
        {" < Back "}
      </Link>
      <Gallery blog={blog} />

      <div className="mt-4">
        <h1 className="text-3xl font-semibold text-[#f0be5b] ">
          {" "}
          {blog.title}{" "}
        </h1>
        <h2 className="text-l font-semibold italic mb-2 overflow-ellipsis pt-4 text-[#f0be5b]">
          Author: {blog.author}
        </h2>

        <div className="mt-4 flex items-center text-gray-400">
          <span className="text-sm">
            Published on {new Date(blog.created).toLocaleString()}
          </span>
        </div>
        <div>
          <div
            className="mt-4 text-white"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
