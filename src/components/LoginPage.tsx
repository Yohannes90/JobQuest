import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        window.location.href = '/admin';
      } else {
        setError('Invalid email or password');
      }

      setFormData({ email: '', password: '' });
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-harSecondary py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl space-y-8">
        <div className="text-center">
          <h2 className="uppercase text-4xl font-bold text-harPrimary">Admin Login</h2>
          <p className="mt-2 text-lg text-harAccent">
            Please login to access the admin dashboard.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          {error && <p className="text-red-600 mb-4">{error}</p>}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full px-4 py-3 border border-harSecondary rounded-md shadow-sm focus:ring-harPrimary focus:border-harPrimary"
                required
              />
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="block w-full px-4 py-3 border border-harSecondary rounded-md shadow-sm focus:ring-harPrimary focus:border-harPrimary"
                required
              />
              <div
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-harSecondary"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </div>
            </div>
            <div className="flex w-full justify-center">
              <button
                type="submit"
                className="w-full py-3 px-6 outline-none text-lg font-medium rounded-md text-white bg-harPrimary hover:bg-harSecondary transition duration-200"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
