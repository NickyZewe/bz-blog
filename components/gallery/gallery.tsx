"use client";

import { Tab } from "@headlessui/react";

import Image from "next/image";
import GalleryTab from "./gallery-tab";
import { BlogProps } from "@/entities/types";
import { pocketBaseURL } from "@/entities/pocketBase";

export interface GalleryProps {
  blog: BlogProps;
}

const Gallery: React.FC<GalleryProps> = ({ blog }) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {blog.images.map((image) => (
            <GalleryTab
              key={image}
              image={`${pocketBaseURL}/api/files/${blog.collectionId}/${blog.id}/${image}`}
            />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full">
        {blog.images.map((image) => (
          <Tab.Panel key={image}>
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden mt-5">
              <Image
                fill
                src={`${pocketBaseURL}/api/files/${blog.collectionId}/${blog.id}/${image}`}
                alt="Image"
                className="object-cover object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;
