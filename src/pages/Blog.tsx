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

const Blog:React.FC = () => {
    const location = useLocation();
    const { blog } = location.state as {blog : Blog}
  return (
    <div>Blog</div>
  )
}

export default Blog