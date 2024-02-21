import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { tableData } from "../data/data";

const items = tableData;
function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div
            key={item.id}
            className="row-item p-3 grid grid-cols-1  sm:grid-cols-4  lg:grid-cols-8 gap-y-2 "
          >
            <p className="text-Phosphorus-100">{item.invoiceId}</p>
            <p className="text-white">{item.store}</p>
            <p className="text-white">{item.wallet}</p>
            <p className="text-white">{item.cryptoAmount}</p>
            <div className="flex flex-wrap items-center gap-x-1">
              <img src="images/vuvi.png" width="24px" height="24px" />
              <p className="text-white">USD</p>
              <p className="text-xs text-slate-300">TRC20</p>
            </div>
            <p className="text-white">{item.cryptoAmount}</p>
            <div className="text-white flex items-center flex-wrap">
              <p>{item.data}</p>
              <p className="text-xs text-slate-300 pl-1">at {item.time}</p>
            </div>
            <p
              className={` ${
                item.status === "Pending"
                  ? "text-orange-600 bg-orange-200 font-bold p-1 rounded-lg text-center"
                  : item.status === "Canceled"
                  ? "text-red-600 bg-red-200 font-bold p-1 rounded-lg text-center"
                  : "text-green-600 bg-green-200 font-bold p-1 rounded-lg text-center"
              }`}
            >
              {item.status}
            </p>
          </div>
        ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        activeClassName={"active"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
      />
    </>
  );
}
export default PaginatedItems;
