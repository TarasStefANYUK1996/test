import React from "react";
import { useState } from "react";
import { CustomersItem } from "../components/index";
const Pagination = ({ clientShow }) => {
  let itemsPerPage = 8;
  // Розраховуємо індекси першого та останнього товарів на поточній сторінці
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = clientShow.slice(indexOfFirstItem, indexOfLastItem);

  // Функція для переходу на іншу сторінку
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      {currentItems.map((item, index) => {
        return <CustomersItem key={index} client={item} />;
      })}
      <div>
        {clientShow.length > itemsPerPage && (
          <ul className="pagination">
            {Array.from(
              { length: Math.ceil(clientShow.length / itemsPerPage) },
              (_, index) => (
                <li
                  key={index}
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              )
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Pagination;
