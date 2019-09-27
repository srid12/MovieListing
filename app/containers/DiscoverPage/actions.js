/*
 *
 * DiscoverPage actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_POPULAR_MOVIES,
  POPULAR_MOVIES_LOADED,
  SET_MOVIE_LIST_TYPE,
  SEARCH_MOVIES,
  SEARCH_MOVIES_LOADED,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getPopularMovies(payload) {
  return {
    type: GET_POPULAR_MOVIES,
    payload,
  };
}

export function popularMoviesLoaded(payload) {
  return {
    type: POPULAR_MOVIES_LOADED,
    payload,
  };
}

export function setMovieListType(payload) {
  return {
    type: SET_MOVIE_LIST_TYPE,
    payload,
  };
}

export function startSearch(payload) {
  return {
    type: SEARCH_MOVIES,
    payload,
  };
}

export function searchMoviesLoaded(payload) {
  return {
    type: SEARCH_MOVIES_LOADED,
    payload,
  };
}
