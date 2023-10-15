import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import PreviewInfo from "./pages/PreviewInfo";
import axios from "axios";
import { useEffect } from "react";
import { baseURL } from "./utils";
import { setPeople, setTotalCount } from "./redux/slices/PeopleReducer";
import { useAppDispatch, useAppSelector } from "./redux/store";

function App() {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.people.search);
  const page = useAppSelector((state) => state.people.currentPage);

  useEffect(() => {
    axios
      .get(`${baseURL}/people/?search=${search}&page=${page}`)
      .then((res) => {
        dispatch(setPeople(res.data.results));
        dispatch(setTotalCount(res.data.count));
      });
  }, [search, page]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<PreviewInfo />} />
      </Routes>
    </div>
  );
}

export default App;
