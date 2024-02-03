import MainPageNavigation from "./MainPageNavigation";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <MainPageNavigation />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
