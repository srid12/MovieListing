/*
 *
 * DiscoverPage reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  POPULAR_MOVIES_LOADED,
  SEARCH_MOVIES_LOADED,
} from './constants';

export const initialState = {
  movies: null,
};

/* eslint-disable default-case, no-param-reassign */
const discoverPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case POPULAR_MOVIES_LOADED:
        draft.movies = action.payload;
        break;
      case SEARCH_MOVIES_LOADED:
        draft.searchMovies = action.payload;
        break;
    }
  });

export default discoverPageReducer;
