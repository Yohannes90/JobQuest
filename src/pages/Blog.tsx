import { useLocation } from "react-router-dom";

interface Blog {
  id: number;
  blogTitle: string;
  blogCategory:
    | "technology"
    | "business"
    | "lifestyle"
    | "education"
    | "health"
    | "entertainment";
  content: string;
  image: string;
  publishedAt: string;
}

const Blog: React.FC = () => {
  const location = useLocation();
  const { blog } = location.state as { blog: Blog };
  return (
    <div>
      <img src={blog.image} alt="" />
      <h1>{blog.blogTitle}</h1>
      <p>
        <span>{blog.blogCategory}</span> | <span>{blog.publishedAt}</span>
      </p>
      <div>{blog.content}</div>
    </div>
  );
};

export default Blog;
