import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BlogPostForm from "./BlogPostForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

interface BlogPost {
  id: number;
  title: string;
  authorId: number;
  content: string;
  category: BlogCategory; // This will be one of the BlogCategory enum values
  publicationDate: string; // Typically this would be a Date object, but we'll use string for simplicity
  image?: string; // Optional image URL
}

enum BlogCategory {
  Business = "business",
  SocialEnterprise = "social_enterprise",
  Technology = "technology",
  Education = "education",
  Innovation = "innovation",
  YouthDevelopment = "youth_development",
}

const BlogDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("blogPosts");
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [isEditingBlog, setIsEditingBlog] = useState(false);
  const currentUser = {
    id: 1,
    name: "John Doe",
    role: "Admin",
  };
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true; // Track whether the component is mounted

    const fetchBlogPosts = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/blog-postings/all",
          {
            credentials: "include",
          }
        );
        if (response.status === 401) {
          navigate("/login");
        } else if (isMounted) {
          const data = await response.json();
          setBlogPosts(data);
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchBlogPosts();
  }, [navigate]);

  const handleDeleteBlogPost = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3001/api/blogs/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (response.status === 401) {
        navigate("/login");
      } else {
        setBlogPosts(blogPosts.filter((post) => post.id !== id));
      }
    } catch (error) {
      console.error("Error deleting blog post:", error);
    }
  };

  const handleEditBlogPost = (post: BlogPost) => {
    setEditingBlog(post);
    setIsEditingBlog(true);
    setActiveTab("addBlogPost");
  };

  const handleLogout = async () => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/api/logout`, {
        method: "POST",
        credentials: "include", // Ensures cookies are sent with the request
      });
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-harPrimary">
        Blog Admin Dashboard
      </h1>
      <div className="flex justify-between items-center mb-8">
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab("blogPosts")}
            className={`px-4 py-2 rounded ${
              activeTab === "blogPosts"
                ? "bg-harSecondary text-white"
                : "bg-white text-harSecondary"
            }`}
          >
            Manage Blog Posts
          </button>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-harPrimary text-white rounded"
        >
          Logout
        </button>
      </div>

      {activeTab === "blogPosts" && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-harPrimary mb-4">
            Blog Posts
          </h2>
          <button
            onClick={() => {
              setEditingBlog(null);
              setIsEditingBlog(false);
              setActiveTab("addBlogPost");
            }}
            className="px-4 py-2 bg-harSecondary text-white rounded mb-4"
          >
            Add Blog Post
          </button>
          <div className="overflow-x-auto shadow-md sm:rounded-lg mb-8">
            <table className="min-w-full bg-white">
              <thead className="bg-harPrimary text-white">
                <tr>
                  <th className="py-2 px-4">Title</th>
                  <th className="py-2 px-4">Category</th>
                  <th className="py-2 px-4">Content</th>
                  <th className="py-2 px-4">Author ID</th>
                  <th className="py-2 px-4">Publication Date</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogPosts.map((post) => (
                  <tr key={post.id} className="border-b">
                    <td className="py-2 px-4">{post.title}</td>
                    <td className="py-2 px-4">{post.category}</td>
                    <td className="py-2 px-4">{post.content}</td>
                    <td className="py-2 px-4">{post.authorId}</td>
                    <td className="py-2 px-4">
                      {/* {new Date(post.publicationDate).toLocaleDateString()} */}
                      post.publicationDate
                    </td>
                    <td className="py-2 px-4 flex space-x-2">
                      <button
                        onClick={() => handleEditBlogPost(post)}
                        className="text-green-500"
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button
                        onClick={() => handleDeleteBlogPost(post.id)}
                        className="text-red-500"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === "addBlogPost" && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-harPrimary mb-4">
            {isEditingBlog ? "Edit Blog Post" : "Add Blog Post"}
          </h2>
          <BlogPostForm post={editingBlog} currentUserId={currentUser.id} />
        </div>
      )}
    </div>
  );
};

export default BlogDashboard;
