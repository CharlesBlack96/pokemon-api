import React from "react";

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div>
      {gotoPrevPage && <button onClick={gotoPrevPage}>PREVIOUS</button>}
      {gotoNextPage && <button onClick={gotoNextPage}>NEXT</button>}
    </div>
  );
}
