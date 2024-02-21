import { GoBellFill } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";

const Topbar = ({ toggleSidebar }) => {
  const handleIconClick = (e) => {
    e.stopPropagation();
    toggleSidebar();
  };

  return (
    <div className="bg-dark-200 w-full h-20 flex items-center justify-between px-5 ">
      <div className="flex items-center gap-x-5">
        <GiHamburgerMenu
          onClick={handleIconClick}
          className="lg:hidden text-white text-2xl"
        />
        <h1 className="text-2xl text-white font-bold">Invoices</h1>
      </div>
      <div className="text-white flex items-center gap-x-5">
        <GoBellFill className="text-white text-2xl" />
        <div className="flex items-center gap-x-2">
          <img
            className="rounded-full"
            src="images/profile.png"
            width="32px"
            height="32px"
          />
          <p>Profile</p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
