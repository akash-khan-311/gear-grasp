import { Outlet } from "react-router-dom";


const Root = () => {
  return (
    <div className="font-unbounded overflow-x-hidden">
      
      <Outlet />
    </div>
  );
};

export default Root;
