import React, { useContext, useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import { UserInfoContext } from "../../../custom/Custom";
import { useNavigate } from "react-router-dom";
function RegisterForm() {
  const { RegestionFun } = useContext(UserInfoContext);
  const navigate = useNavigate();

  const [passwordShow, setPasswordShow] = useState(false);
  const [Password, setPassword] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("❌ Password এবং Confirm Password এক নয়!");
      return;
    }

    RegestionFun(formData.email, formData.password)
      .then((result) => {
        const user = result.user;
        updateProfile(user, {
          displayName: formData.fullName,
        })
          .then(() => {
            setError("");
            alert("✅ রেজিস্ট্রেশন সফল হয়েছে!");
            // ✅ Navigate to login after 2 seconds
            setTimeout(() => {
              navigate("/login");
            }, 1000);
          })
          .catch((error) => {
            setError("⚠️ প্রোফাইল আপডেট করতে সমস্যা হয়েছে");
            console.log(error.message);
          });
      })
      .catch((error) => {
        setError("❌ এই ইমেলটি ইতিমধ্যে ব্যবহার হয়েছে");
        console.log(error.message);
      });
  };
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/736x/4d/26/2e/4d262ea940d195692abde2a0aa5a5c30.jpg)",
      }}
    >
      <div className="w-full max-w-md  p-6 rounded-lg shadow-md backdrop-blur-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">
          Register
        </h2>
        {error && (
          <button className="btn btn-error w-full animate-bounce">
            {error}
          </button>
        )}
        <form onSubmit={handleSubmit} className="space-y-4 text-white">
          <div>
            <label className="block font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="input input-bordered w-full input-accent bg-transparent text-white"
              placeholder="Your full name"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered w-full input-accent bg-transparent text-white"
              placeholder="Your email"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Password</label>
            <div className="relative">
              <input
                type={Password ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="input input-bordered w-full input-accent bg-transparent text-white"
                placeholder="Re-enter password"
                required
              />
              <button
                type="button"
                onClick={() => setPassword(!Password)}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 text-xl"
              >
                {Password ? <IoEyeSharp /> : <FaEyeSlash />}
              </button>
            </div>
          </div>

          <div>
            <label className="block font-medium">Confirm Password</label>
            <div className="relative">
              <input
                type={passwordShow ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="input input-bordered w-full input-accent bg-transparent text-white"
                placeholder="Re-enter password"
                required
              />
              <button
                type="button"
                onClick={() => setPasswordShow(!passwordShow)}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 text-xl"
              >
                {passwordShow ? <IoEyeSharp /> : <FaEyeSlash />}
              </button>
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="select select-bordered w-full input-accent bg-transparent text-black"
              required
            >
              <option value="" disabled>
                Select gender
              </option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
