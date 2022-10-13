import { connect } from 'react-redux'

import * as React from 'react';
import Pagination from '@mui/material/Pagination';

import { setPage } from '../redux/actions';

const PaginationComponent = ({ movies, page, filter, setPage }) => {
  const moviesFiltered = movies.filter(m => {
    if (filter === '') return true;
    return (m.category === filter)
})

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  };

  return (
    <Pagination
      component="div"
      count={Math.ceil(moviesFiltered.length / 4)}
      page={page}
      onChange={handleChangePage}
      defaultPage={page}
      style={{ display: 'flex', justifyContent: "center" }}
    />
  );
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  page: state.pagination.page,
  filter: state.filter,
})

export default connect(
  mapStateToProps,
  { setPage }
)(PaginationComponent);
