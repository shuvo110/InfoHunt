import React, { useContext } from "react";
import { UserInfoContext } from "../../custom/Custom";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { userData, loading } = useContext(UserInfoContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-500">
        <span className="loading loading-bars loading-lg"></span>
        <p className="ml-2">Loading user info...</p>
      </div>
    );
  }
  if (!userData) {
    alert("⚠️ আপনি আগে লগইন করুন!");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

export default PrivateRoute;
