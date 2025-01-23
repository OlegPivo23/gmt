"use client";

import React, { useState } from "react";
import "./pagination.scss";

export default function PaginationComponent() {
  const [activePage, setActivePage] = useState(1);
  const totalPages = 5;

  const handlePageClick = (page) => {
    setActivePage(page);
  };

  const handlePrevClick = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
  };

  const handleNextClick = () => {
    if (activePage < totalPages) {
      setActivePage(activePage + 1);
    }
  };

  return (
    <div className="pagination__wrapper">
      <ul className="pagination__list">
        <li>
          <button
            className="pagination__list-item pagination__list-item--active"
            onClick={handlePrevClick}
            disabled={activePage === 1}
          >
            Пред.
          </button>
        </li>

        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <li key={page}>
              <button
                className={`pagination__list-item ${
                  activePage === page ? "pagination__list-item--active" : ""
                }`}
                onClick={() => handlePageClick(page)}
              >
                {page}
              </button>
            </li>
          );
        })}

        <li>
          <button
            className="pagination__list-item pagination__list-item--active"
            onClick={handleNextClick}
            disabled={activePage === totalPages}
          >
            След.
          </button>
        </li>
      </ul>
    </div>
  );
}
