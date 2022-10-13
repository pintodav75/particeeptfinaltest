import MovieFilter from "./movieFilter";
import MovieList from "./movieList";
import Pagination from "./pagination";
import '../css/main.css'
import { useDispatch } from 'react-redux'
import { useEffect } from "react";
import { getMovies } from "../redux/actions";

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMovies())
  }, [dispatch]);

  return (
    <>
      <MovieFilter />
      <MovieList />
      <Pagination />
    </>
  )
}

export default App;