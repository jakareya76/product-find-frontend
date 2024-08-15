import { Outlet } from "react-router-dom";
import Navbar from "./components/shared/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
