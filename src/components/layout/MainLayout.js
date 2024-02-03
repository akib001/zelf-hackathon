import MainPageNavigation from "./MainPageNavigation";
import Footer from "./Footer";

const MainLayout = ({ children }) => {

  return (
    <>
      <MainPageNavigation />
      <div className="body">{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
