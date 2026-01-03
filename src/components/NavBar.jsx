import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";

export function NavBar() {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > lastScroll && currentScroll > 50) {
        // Scrolling down → hide navbar
        setShow(false);
      } else {
        // Scrolling up → show navbar
        setShow(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <>
      <title>HomePage</title>
      <nav
        className="navbar-homepage"
        style={{
          top: show ? "0" : "-100px",
          transition: "top 0.3s ease",
          position: "fixed",
          width: "100%",
          zIndex: 1000,
        }}
      >
        <div className="logo">LinkUp</div>
        <ul>
          <li className="active">Home</li>
          <li>About</li>
          <li>Features</li>
          <li>Support</li>
        </ul>

        <div className="auth-buttons">
          <button onClick={() => navigate("/login")} className="login-button">
            Log In
          </button>
          <button className="signup-button" onClick={() => navigate("/signup")}>Sign Up</button>
        </div>
      </nav>
    </>
  );
}
