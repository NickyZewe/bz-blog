
import { pb } from "@/entities/pocketBase";
import { useEffect, useState } from "react";

export function FetchBlogs () {
    const [blogs, setBlogs] = useState<any[]>([]);

    const fetchBlogs = async () => {
      try {
        const response = await pb.collection("blogs").getFullList({
          sort: "-created",
        });
        setBlogs(response);
      } catch (error) {
        console.error(error);
      }
    };
 
    useEffect(() => {
    fetchBlogs();
  }, []);

  return blogs;
}