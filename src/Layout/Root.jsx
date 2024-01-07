import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";

const Root = () => {
  return (
    <div className="font-unbounded overflow-x-hidden">
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
