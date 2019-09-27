import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { GET_POPULAR_MOVIES, SEARCH_MOVIES } from './constants';
import { popularMoviesLoaded, searchMoviesLoaded } from './actions';
const API_KEY = '3a94078fb34b772a31d9a1348035bed7';

function* getPopularMovies({ payload }) {
  const requestUrl = `https://api.themoviedb.org/3/movie/${payload}?api_key=${API_KEY}&language=en-US&page=1`;
  try {
    const res = yield call(request, requestUrl);
    yield put(popularMoviesLoaded(res));
  } catch (err) {
    console.error(err);
  }
}

function* searchMovies({ payload }) {
  //https://api.themoviedb.org/3/search/movie?api_key=3a94078fb34b772a31d9a1348035bed7&language=en-US&query=sa&page=1&include_adult=false

  const requestUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${payload}&page=1&include_adult=false`;
  try {
    const res = yield call(request, requestUrl);
    yield put(searchMoviesLoaded(res));
  } catch (err) {
    yield put(searchMoviesLoaded({ results: [] }));
  }
}

// Individual exports for testing
export default function* discoverPageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_POPULAR_MOVIES, getPopularMovies);
  yield takeLatest(SEARCH_MOVIES, searchMovies);
}
