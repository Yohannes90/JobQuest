import { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

interface BlogPostData {
  id?: number;
  title: string;
  content: string;
  category: BlogCategory;
  image?: string;
}

interface BlogPostFormProps {
  post: BlogPostData | null;
  currentUserId: number; // Assuming you pass the current user ID as a prop
}

enum BlogCategory {
  Business = "business",
  SocialEnterprise = "social_enterprise",
  Technology = "technology",
  Education = "education",
  Innovation = "innovation",
  YouthDevelopment = "youth_development",
}

const BlogPostForm: React.FC<BlogPostFormProps> = ({ post, currentUserId }) => {
  const initialFormData: BlogPostData = {
    title: "",
    content: "",
    category: BlogCategory.Business,
  };

  const [formData, setFormData] = useState<BlogPostData>(initialFormData);

  useEffect(() => {
    if (post) {
      setFormData(post);
    }
  }, [post]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEditorChange = (name: string, data: string) => {
    setFormData({
      ...formData,
      [name]: data,
    });
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log(formData);

    try {
      const url = post
        ? `${import.meta.env.VITE_API_URL}/api/blogs/${formData.id}`
        : `${import.meta.env.VITE_API_URL}/api/submit-blog-post`;
      const method = post ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          authorId: currentUserId, // Attach the current user ID as the author
        }),
      });

      if (response.ok) {
        console.log("Blog post submitted successfully");
        resetForm();
      } else {
        const errorText = await response.text();
        console.error("Failed to submit blog post:", errorText);
      }
    } catch (error) {
      console.error("Error submitting blog post:", error);
    }
  };

  return (
    <div
      id="blog-post-form"
      className="min-h-screen flex items-center justify-center py-12 bg-gray-100"
    >
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="text-center mb-6">
          <h2 className="uppercase text-3xl text-harPrimary">
            {post ? "Update Blog Post" : "Blog Post Creation"}
          </h2>
          <p className="mt-4 text-lg text-gray-600 font-thin">
            {post
              ? "Update the details of the blog post below."
              : "Fill out the form below to create a blog post."}
          </p>
        </div>
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div className="col-span-2">
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Enter Title..."
                value={formData.title}
                onChange={handleChange}
                className="block w-full bg-gray-50 text-gray-800 outline-none px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
                required
              />
            </div>
            <div>
              <select
                name="category"
                id="category"
                value={formData.category}
                onChange={handleChange}
                className="block w-full bg-gray-50 text-gray-800 outline-none px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
                required
              >
                <option value="" disabled>
                  Select Category
                </option>
                {Object.keys(BlogCategory).map((key) => (
                  <option
                    key={key}
                    value={BlogCategory[key as keyof typeof BlogCategory]}
                  >
                    {key.replace("_", " ")}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <input
                type="text"
                name="image"
                id="image"
                placeholder="Image URL"
                value={formData.image || ""}
                onChange={handleChange}
                className="block w-full bg-gray-50 text-gray-800 outline-none px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
              />
            </div>
          </div>
          <div className="col-span-2">
            <CKEditor
              editor={ClassicEditor}
              config={{
                placeholder: "Enter Content...",
              }}
              data={formData.content}
              onChange={(_event, editor) =>
                handleEditorChange("content", editor.getData())
              }
            />
          </div>
          <div className="flex w-full justify-center">
            <button
              type="submit"
              className="w-1/2 py-3 px-6 outline-none text-lg font-medium rounded-md text-white bg-harPrimary hover:bg-harSecondary transition duration-200"
            >
              {post ? "Update Post" : "Create Post"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogPostForm;
