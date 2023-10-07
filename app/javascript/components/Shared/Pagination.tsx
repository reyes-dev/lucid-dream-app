import React, { useMemo } from "react";
import { useLocation } from "wouter";

function Pagination({ pageNumber, entryCount }) {
  const [, navigate] = useLocation();

  const pageCount = useMemo(() => {
    return Math.floor(entryCount / 10);
  }, [entryCount]);

  return (
    <section className="flex gap-8 self-center">
      {pageNumber === 0 ? null : (
        <button
          className="pb pt rounded border border-white/20 pl-4 pr-4 hover:border-white hover:bg-slate-700"
          onClick={() => {
            navigate(`/entries/page/${pageNumber - 1}`);
          }}
        >
          {"<-"}
        </button>
      )}

      <p className="self-end border-b-2 text-lg">{pageNumber}</p>

      {pageNumber === pageCount ? null : (
        <button
          className="pb pt rounded border border-white/20 pl-4 pr-4 hover:border-white hover:bg-slate-700"
          onClick={() => {
            navigate(`/entries/page/${pageNumber + 1}`);
          }}
        >
          {"->"}
        </button>
      )}
    </section>
  );
}

export default Pagination;