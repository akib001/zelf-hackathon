import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      {!isLoading && !isAuthenticated ? (
        <LoginPage />
      ) : !isLoading && isAuthenticated ? (
        <MainPage />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default App;
