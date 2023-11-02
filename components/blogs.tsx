import { FetchBlogs } from "@/actions/fetch-blogs";
import { CategoryContext } from "@/context/category-context";
import { pocketBaseURL } from "@/entities/pocketBase";
import { useContext } from "react";
import BlogCard from "./blog-card";

const Blogs = () => {
  const blogs = FetchBlogs();
  const url = pocketBaseURL;
  const { category } = useContext(CategoryContext);

  if (category) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5 p-5 pl-0">
        {blogs &&
          blogs
            .filter((blog) => blog.category === category)
            .map((blog) => (
              <BlogCard
                key={blog.id}
                title={blog.title}
                description={blog.description}
                headerImage={`${url}/api/files/${blog.collectionId}/${blog.id}/${blog.headerImage}`}
                id={blog.id}
                author={blog.author}
              />
            ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5 p-5 pl-0">
      {blogs &&
        blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            description={blog.description}
            headerImage={`${url}/api/files/${blog.collectionId}/${blog.id}/${blog.headerImage}`}
            id={blog.id}
            author={blog.author}
          />
        ))}
    </div>
  );
};

export default Blogs;
