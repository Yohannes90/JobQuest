import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

// Enum for subscription type
enum Type {
  Blog,
  Newsletter,
}

// Interface for email subscription data
interface Email {
  email: string;
  type: Type;
}

// Initial form data for resetting the form
const initialFormData: Email = {
  email: "",
  type: Type.Blog, // Default to Blog
};

const Newsletter: React.FC = () => {
  const [formData, setFormData] = useState<Email>(initialFormData);

  useEffect(() => {
    if (formData.email) {
      setFormData({ ...formData });
    }
  }, [formData.email, formData]);

  // Reset form to initial data
  const resetForm = () => {
    setFormData(initialFormData);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const url = `${import.meta.env.VITE_API_URL}/api/subscribe`;
      const method = "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Blog subscription submitted successfully");
        resetForm(); // Clear the form fields after successful submission
      } else {
        const errorText = await response.text();
        console.error("Failed to submit blog subscription:", errorText);
      }
    } catch (error) {
      console.error("Error submitting blog subscription:", error);
    }
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
        <FontAwesomeIcon icon={faEnvelopeOpenText} /> Subscribe to our Blog
      </h3>
      <p className="text-black/75 text-base mb-4">
        Be the first to know when a new blog post is published
      </p>
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border focus:outline-none border-harSecondary rounded-sm bg-white py-2 px-4"
          placeholder="name@email.com"
          required
        />
        <input
          type="submit"
          value="Subscribe"
          className="w-full bg-harSecondary rounded-sm text-white cursor-pointer p-2"
        />
      </form>
    </div>
  );
};

export default Newsletter;
