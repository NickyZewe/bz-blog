import { FetchBlogs } from "@/actions/fetch-blogs";
import BlogCard from "./blog-card";

const Blogs = () => {
  const blogs = FetchBlogs();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {blogs &&
        blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            description={blog.description}
            headerImage={
              "http://127.0.0.1:8090/api/files/nxdyygkfkn4pi39/uk6ow7n9vi95smq/381721838_2029828914042892_4840172428797796281_n_9s9BIEtuKZ.jpg?token="
            }
            id={blog.id}
          />
        ))}
    </div>
  );
};

export default Blogs;
