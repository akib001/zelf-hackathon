import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="container nav-container">
      <img src="/logo.svg" alt="zelf" />
      <div className="buttons-container">
        <button className="text-button">Sign</button>
        <button className="contained-button">Join</button>
      </div>
    </div>
  );
};

export default Navigation;