import { useAuth0 } from "@auth0/auth0-react";
import "./MainPageNavigation.css";

const MainPageNavigation = () => {
  const { user } = useAuth0();

  return (
    <div className="navbar">
      <div className="container nav-container">
        <img src="/color-logo.svg" alt="zelf" />
        <button class="circle-icon-button">
          <img
            src={user?.picture ? user.picture : "profile-icon.svg"}
            alt="Profile"
            class="icon"
          />
        </button>
      </div>
    </div>
  );
};

export default MainPageNavigation;
