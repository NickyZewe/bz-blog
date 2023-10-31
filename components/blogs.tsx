import { FetchBlogs } from "@/actions/fetch-blogs";
import BlogCard from "./blog-card";
import { pocketBaseURL } from "@/entities/pocketBase";

const Blogs = () => {
  const blogs = FetchBlogs();
  const url = pocketBaseURL;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
