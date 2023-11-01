import Image from "next/image";

import { Tab } from "@headlessui/react";

interface GalleryTabProps {
  image: string;
}
const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              fill
              src={`http://127.0.0.1:8090/api/files/nxdyygkfkn4pi39/ol02jcqmk9ubol2/${image}`}
              alt="Product Image"
              className="object-cover object-center"
            />
          </span>
          <span className="absolute inset-0 rounded-md rind-2 rind-offset-2" />
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
