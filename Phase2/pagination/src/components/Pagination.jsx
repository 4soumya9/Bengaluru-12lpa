import React from "react";

const Pagination = ({ currentpage, noOfPages, next, prev, gotoPage }) => {
  const pageNumber = [];
  for (let i = 0; i < noOfPages; i++) {
    pageNumber.push(i);
  }
  return (
    <div>
      <h2>Pagination</h2>
      {pageNumber.map((t) => (
        <button onClick={() => gotoPage(t)}>{t+1}</button>
      ))}
      <button onClick={prev} disabled={currentpage === 0}>
        Prev
      </button>
      <button onClick={() => next()} disabled={currentpage === noOfPages-1}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
