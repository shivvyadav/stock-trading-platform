import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE =
  // (typeof import.meta !== "undefined" &&
  //   import.meta.env &&
  //   import.meta.env.VITE_API_URL) ||
  "http://localhost:5000";

const Signup = () => {
  const [form, setForm] = useState({ email: "", username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const validate = () => {
    if (!form.email || !form.username || !form.password) {
      return "All fields are required.";
    }
    // simple email check
    const re = /^\S+@\S+\.\S+$/;
    if (!re.test(form.email)) return "Please enter a valid email address.";
    if (form.password.length < 6)
      return "Password should be at least 6 characters.";
    if (form.username.length < 2)
      return "Username should be at least 2 characters.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (v) {
      setError(v);
      return;
    }
    setSuccess("");
    try {
      const res = await fetch(`${API_BASE}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // allow cookies if backend sets them
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok && data && data.message) {
        setError(data.message);
      } else if (data && data.success) {
        setSuccess(data.message || "Signed up successfully.");
        setForm({ email: "", username: "", password: "" });
        // short pause so user sees success message, then redirect to home
        setTimeout(() => navigate("/login"), 900);
      } else if (data && data.message) {
        // backend sometimes returns 200 with message
        setError(data.message);
      } else {
        setSuccess("Signed up successfully.");
        navigate("/login");
      }
    } catch (err) {
      setError("Failed to reach server. Check console or backend status.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: 420,
        margin: "10rem auto",
        padding: "1.25rem",
        border: "1px solid #e6e6e6",
        borderRadius: 8,
      }}
    >
      <h2 className="mb-4 text-center text-2xl font-semibold">
        Create an account
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            name="username"
            type="text"
            value={form.username}
            onChange={handleChange}
            placeholder="Choose a username"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={handleChange}
              placeholder="At least 6 characters"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-gray-500 hover:text-gray-700"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                // eye-off icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              ) : (
                // eye icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-5 0-9.27-3-11-7 1.08-2.2 2.9-4.04 5.16-5.24" />
                  <path d="M1 1l22 22" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {error && <div className="text-sm text-red-600">{error}</div>}
        {success && <div className="text-sm text-green-600">{success}</div>}

        <div className="mt-2">
          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-md py-2 text-white ${loading ? "cursor-not-allowed bg-blue-300" : "bg-blue-600 hover:bg-blue-700"}`}
          >
            {loading ? "Creating account..." : "Sign up"}
          </button>
        </div>
      </form>

      <p className="mt-3 text-xs text-gray-500">
        By signing up you agree to our terms.
      </p>
    </div>
  );
};

export default Signup;
