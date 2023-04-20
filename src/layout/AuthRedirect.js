import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function AuthRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"; // replace with your authentication logic
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, []);

  return <Outlet />;
}

export default AuthRedirect;
