import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="container login-container">
      <div className="grid-container">
        <div className="col-span-6">
          <img
            src="/zelf-login-cover.png"
            alt="zelf cover"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-span-6 register-account-container">
          <div className="register-account">Register Your Account</div>
          <div className="login-btns-container">
            <button className="outlined-button full-width-btn">
              <img
                src="/circle-icon.svg"
                alt="Circle icon"
                className="start-icon"
              />
              I Represent A Brand
            </button>
            <button className="contained-button full-width-btn">
              Continue
            </button>
          </div>
          <div className="already-member-container">
            <div className="already-member">Already a member?</div>
            <button className="text-button">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
