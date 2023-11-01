import Gallery from "@/components/gallery/gallery";
import { pb, pocketBaseURL } from "@/entities/pocketBase";
import { Tab } from "@headlessui/react";
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
  const blog = await pb.collection("blogs").getOne(params.blogId);

  return (
    <div className="max-w-3xl mx-auto-p-4">
      <Link href={"/"}>{" < Back "}</Link>
      <div className="relative w-96 h-96 overflow-hidden rounded-lg mt-5">
        <Image
          src={`${pocketBaseURL}/api/files/${blog.collectionId}/${blog.id}/${blog.headerImage}`}
          alt="image"
          priority
          layout="fill"
        />
      </div>
      <div className="flex flex-col-reverse">
        <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
          <div className="grid grid-cols-4 gap-6">
            {blog.images &&
              blog.images.map((image: string) => (
                <Image
                  src={`${pocketBaseURL}/api/files/${blog.collectionId}/${blog.id}/${image}`}
                  alt="image"
                  width={300}
                  height={300}
                  key={image}
                  className="cursor-pointer transform rounded-lg brightness-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300"
                />
              ))}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-3xl font-semibold "> {blog.title} </h1>
        <h2 className="text-l font-semibold italic mb-2 overflow-ellipsis pt-4">
          Author: {blog.author}
        </h2>

        <div className="mt-4 flex items-center text-gray-400">
          <span className="text-sm">Published on {blog.created}</span>
        </div>
        <div>
          <div
            className="mt-4"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
