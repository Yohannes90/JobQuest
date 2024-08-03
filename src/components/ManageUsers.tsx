import { useState, useEffect } from "react";
import UserForm from "./UserForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const ManageUsers: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/users", {
          credentials: "include",
        });
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = async (id: number) => {
    try {
      await fetch(`http://localhost:3001/api/users/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleSaveUser = async (user: any) => {
    try {
      const method = isEditing ? "PUT" : "POST";
      const url = isEditing
        ? `http://localhost:3001/api/users/${editingUser.id}`
        : "http://localhost:3001/api/users";
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(user),
      });
      const data = await response.json();
      if (isEditing) {
        setUsers(users.map((u) => (u.id === editingUser.id ? data : u)));
        setIsEditing(false);
        setEditingUser(null);
      } else {
        setUsers([...users, data]);
      }
    } catch (error) {
      console.error(
        `Error ${isEditing ? "updating" : "creating"} user:`,
        error,
      );
    }
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setIsEditing(true);
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-harPrimary mb-4">Manage Users</h2>
      <div className="overflow-x-auto shadow-md sm:rounded-lg mb-8">
        <table className="min-w-full bg-white">
          <thead className="bg-harPrimary text-white">
            <tr>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Role</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="bg-yellow-100 border-b hover:bg-yellow-200"
              >
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.role}</td>
                <td className="py-2 px-4">
                  <button
                    className="text-yellow-500 mr-2"
                    onClick={() => handleEditUser(user)}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    className="text-red-500"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <UserForm
        user={editingUser}
        isEditing={isEditing}
        onSave={handleSaveUser}
      />
    </div>
  );
};

export default ManageUsers;
