import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import PreviewInfo from "./pages/PreviewInfo";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { fetchPeople } from "./redux/slices/PeopleAsyncReducer";

function App() {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.filter.search);
  const currentPage = useAppSelector((state) => state.filter.currentPage);

  useEffect(() => {
    dispatch(fetchPeople({ search, currentPage }));
  }, [search, currentPage]);

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
