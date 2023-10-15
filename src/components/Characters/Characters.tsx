import React, { useEffect, useState } from "react";
import Character from "../Character/Character";
import "./Characters.css";
import { peopleT, setPage, setSearch } from "../../redux/slices/PeopleReducer";
import Pagination from "../Pagination/Pagination";
import { useAppDispatch, useAppSelector } from "../../redux/store";

export default function Characters() {
  const peopleArray = useAppSelector((state) => state.people.people);
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.people.search);
  const [value, setValue] = useState(search);
  const [close, setClose] = useState(true);

  useEffect(() => {
    setValue(search);
  }, [search]);

  useEffect(() => {
    if (value === "") {
      dispatch(setSearch(""));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    dispatch(setPage(1));
    dispatch(setSearch(value));
  }

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    if (evt.target.value.trim() === "") {
      setClose(true);
    } else {
      setClose(false);
    }
    setValue(evt.target.value);
  }

  function handleClose() {
    dispatch(setSearch(""));
    setValue("");
  }

  function handleSearch(name: string) {
    dispatch(setSearch(name));
    setClose(true);
  }

  return (
    <section className="characters">
      <form className="search" onSubmit={handleSubmit}>
        <label>
          <input
            className="search__input"
            value={value}
            onChange={handleChange}
            placeholder="Search here"
          />
        </label>
        {!close && (
          <ul className="search__list">
            {peopleArray.length >= 1 ? (
              peopleArray.map((elem: peopleT, index) => (
                <li
                  className="search__item"
                  onClick={() => handleSearch(elem.name)}
                  key={index}
                >
                  {elem.name}
                </li>
              ))
            ) : (
              <li className="search__item">No results</li>
            )}
          </ul>
        )}
        {value !== "" && (
          <button className="search__btn" onClick={handleClose}>
            X
          </button>
        )}
      </form>
      <ul className="characters__list">
        {peopleArray.map((elem: peopleT) => {
          return <Character elem={elem} key={elem.name} />;
        })}
      </ul>

      <Pagination />
    </section>
  );
}
