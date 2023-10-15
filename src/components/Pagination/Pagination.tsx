import React from "react";
import "./Pagination.css";
import { setPage } from "../../redux/slices/PeopleReducer";
import {
  paginationActive,
  paginationUnactive,
  peoplePerPage,
} from "../../utils";
import { useAppDispatch, useAppSelector } from "../../redux/store";

export default function Pagination() {
  const pageNumbers: number[] = [];
  const dispatch = useAppDispatch();
  const paginate = (pageNumber: number) => dispatch(setPage(pageNumber));
  const totalCount = useAppSelector((state) => state.people.totalCount);
  const currentPage = useAppSelector((state) => state.people.currentPage);

  for (let i = 1; i <= Math.ceil(totalCount / peoplePerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => {
          return (
            <li
              className={
                currentPage === number ? paginationActive : paginationUnactive
              }
              key={number}
            >
              <button
                className="pagination__btn"
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
