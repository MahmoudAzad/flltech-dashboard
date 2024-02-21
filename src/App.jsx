import { useState } from "react";
import "./App.css";
import Mainbar from "./components/Mainbar";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <div className="flex">
      <div className="">
        <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      </div>
      <div className="flex flex-col w-full">
        <Topbar toggleSidebar={toggleSidebar} />
        <Mainbar />
      </div>
    </div>
  );
}

export default App;
