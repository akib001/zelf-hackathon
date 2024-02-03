import { useAuth0 } from "@auth0/auth0-react";
import "./AuthNavigation.css";

const AuthNavigation = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="navbar">
      <div className="container nav-container">
        <img src="/logo.svg" alt="zelf" />
        <div className="buttons-container">
          <button className="text-button" onClick={() => loginWithRedirect()}>
            Sign In
          </button>
          <button className="contained-button">Join</button>
        </div>
      </div>
    </div>
  );
};

export default AuthNavigation;
