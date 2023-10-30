import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="max-w-3xl mx-auto-p-4">
      <Link href={"/"}>{" < Back "}</Link>
      <div className="relative w-96 h-96 overflow-hidden rounded-lg mt-5">
        <Image src={""} layout="fill" alt="" objectFit="cover" />
      </div>
      <div className="mt-4">
        <h1 className="text-3xl font-semibold "> Blog Title </h1>
        <p className="text-gray-600 mt-2">Blog description</p>
        <div className="mt-4 flex items-center text-gray-400">
          <span className="text-sm">Published on {"23-22-2222"}</span>
        </div>
      </div>
    </div>
  );
};

export default page;
