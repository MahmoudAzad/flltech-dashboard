import { useEffect } from "react";
import { sidebarData } from "../data/data";

const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
  useEffect(() => {
    const closeSidebarOnOutsideClick = (e) => {
      if (isSidebarOpen && e.target.closest(".sidebar") === null) {
        closeSidebar();
      }
    };

    document.addEventListener("click", closeSidebarOnOutsideClick);

    return () => {
      document.removeEventListener("click", closeSidebarOnOutsideClick);
    };
  }, [isSidebarOpen, closeSidebar]);

  return (
    <div
      className={`w-64 h-[1100px] top-0 left-0 bg-dark-200 fixed lg:relative lg:block  ${
        isSidebarOpen ? "block" : "hidden"
      } `}
    >
      <div className="h-20 flex items-center justify-center">
        <img src="images/logo.png" alt="Logo" width="142px" height="40px" />
      </div>
      {sidebarData.map((item) => (
        <div key={item.id}>
          <div className="flex gap-x-2 py-3 pl-4 cursor-pointer rounded-lg m-2 hover:bg-gray-700">
            <img src={item.image} alt="Home" width="24px" height="24px" />
            <p className="text-gray-300 ">{item.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
