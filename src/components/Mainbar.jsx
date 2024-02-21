import PaginatedItems from "./Table";
import { filterTitle } from "../data/data";
import { FaPlus } from "react-icons/fa";
import { AiTwotoneQuestionCircle } from "react-icons/ai";

const Mainbar = () => {
  return (
    <div className="bg-dark-200  rounded-lg p-5 md:m-5">
      <div className="flex flex-wrap justify-center sm:justify-between md:flex-nowrap md:gap-x-10">
        <div className="flex flex-wrap gap-y-5 justify-start items-center gap-x-3 md:flex-nowrap">
          <p className="text-white text-lg font-bold">Invoices</p>
          <AiTwotoneQuestionCircle className="text-2xl" />
        </div>
        <div className="flex w-full flex-wrap justify-end items-center gap-y-2 gap-x-2 md:flex-nowrap ">
          <input
            placeholder="search..."
            className="bg-zinc-800 rounded-lg w-full p-2 text-lg text-white md:w-80"
          />
          <button className=" p-2 border border-amber-400 font-bold text-Phosphorus-100  flex items-center justify-center rounded-lg w-full md:w-36">
            <FaPlus className="text-xs" />
            <p>import invoice</p>
          </button>
          <button className="p-2 text-green-950 font-bold bg-Phosphorus-100  flex items-center justify-center gap-x-1 rounded-lg w-full md:w-36">
            <FaPlus className="text-xs" />
            new invoice
          </button>
        </div>
      </div>
      <div className="text-Phosphorus-100 flex items-center gap-x-2 mt-10">
        <img src="images/advance-filter.png" width="16px" height="16px" />
        <p>Advanced Filters</p>
        <button className="rounded-lg bg-gray-700 w-auto p-2  text-white ml-4">
          clear
        </button>
      </div>
      <div className="grid grid-cols-2 gap-y-5 gap-x-2 mt-10 sm:grid-cols-4 lg:grid-cols-8">
        {filterTitle.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center gap-y-1"
          >
            <p className="text-gray-400 ">{item.name}</p>
            <div className="w-full rounded-lg bg-zinc-800 p-2">
              <img src="images/Filter.png" />
            </div>
          </div>
        ))}
      </div>
      <div className="w-full mt-5">
        <div className="grid grid-cols-2 gap-y-5 gap-x-2 mt-10 sm:grid-cols-4 lg:grid-cols-7 bg-gray-800  rounded-t-xl p-2 ">
          <p className="text-Phosphorus-100">USDTTRC20224</p>
          <p className="text-white">Metabix</p>
          <p className="text-white">USDT</p>
          <p className="text-white">1,500.00</p>
          <p className="text-white">USD TRC20</p>
          <p className="text-white">4/20/2023 at 12:00 PM</p>
          <button className="text-green-600   bg-green-200 font-bold p-1 rounded-lg">
            Resived
          </button>
        </div>
        <div className="grid grid-cols-2 gap-y-5 gap-x-2 mt-10 sm:grid-cols-3 lg:grid-cols-6 p-5 bg-dark-100  pb-24 rounded-b-xl">
          <div className="flex flex-col ">
            <p className="text-gray-300 text-sm">Payer ID</p>
            <p className="text-white">0123456789</p>
          </div>
          <div className="flex flex-col ">
            <p className="text-gray-300 text-sm ">TXID</p>
            <p className="text-white">0123456789</p>
          </div>
          <div className="flex flex-col ">
            <p className="text-gray-300 text-sm ">Pay ID</p>
            <p className="text-white">0123456789</p>
          </div>
          <div className="flex flex-col ">
            <p className="text-gray-300 text-sm ">Buyer ID</p>
            <p className="text-white">0123456789</p>
          </div>
          <div className="flex flex-col ">
            <p className="text-gray-300 text-sm ">TXID</p>
            <p className="text-white">0123456789</p>
          </div>

          <div className="flex flex-col ">
            <p className="text-gray-300 text-sm">
              Remaining Daily Withdrawal Amount
            </p>
            <p className="text-white">0123456789</p>
          </div>
        </div>

        <PaginatedItems itemsPerPage={7} />
      </div>
    </div>
  );
};

export default Mainbar;
