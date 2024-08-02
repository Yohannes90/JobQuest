import { useState, useEffect } from "react";

interface UserFormProps {
  editingUser: any;
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
  setActiveTab: (tab: string) => void;
}

const UserForm: React.FC<UserFormProps> = ({
  editingUser,
  isEditing,
  setIsEditing,
  setActiveTab,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
  });

  useEffect(() => {
    if (isEditing && editingUser) {
      setFormData({
        name: editingUser.name,
        email: editingUser.email,
        role: editingUser.role,
        password: "",
      });
    } else {
      setFormData({
        name: "",
        email: "",
        role: "",
        password: "",
      });
    }
  }, [isEditing, editingUser]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = isEditing
      ? `http://localhost:3001/api/users/${editingUser.id}`
      : "http://localhost:3001/api/users";
    const method = isEditing ? "PUT" : "POST";

    try {
      await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setIsEditing(false);
      setActiveTab("users");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="role" className="block text-sm font-bold mb-2">
          Role
        </label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        >
          <option value="">Select Role</option>
          <option value="ADMIN">Admin</option>
          <option value="JOBS_ADMIN">Jobs Admin</option>
          <option value="BLOG_ADMIN">Blog Admin</option>
        </select>
      </div>
      {!isEditing && (
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
      )}
      <button
        type="submit"
        className="w-full py-2 px-4 bg-harPrimary text-white font-bold rounded"
      >
        {isEditing ? "Update User" : "Add User"}
      </button>
    </form>
  );
};

export default UserForm;
