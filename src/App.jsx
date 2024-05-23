import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="w-full mx-auto md:px-20">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
