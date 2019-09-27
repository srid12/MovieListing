/**
 *
 * DiscoverPage
 *
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import MovieCard from 'components/MovieCard';

import makeSelectDiscoverPage, {
  makeSelectMovies,
  makeSelectSearchMovies,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getPopularMovies, startSearch } from './actions';

const Container = styled.div`
  .movie-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .header {
    padding: 10px;
    display: flex;
  }

  .button-group {
    flex-grow: 1;
    text-align: center;
  }

  button {
    padding: 10px;
    background: transparent;
    color: #fff;
    margin: 0px 10px;
    border: none;
    border-bottom: 1px solid #fff;
    cursor: pointer;
  }

  .search {
    background: transparent;
    color: #fff;
    padding: 10px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
  }

  .search-list {
    position: absolute;
    border: 1px solid #ddd;
    z-index: 10;
    background: #fff;
    list-style: none;
    float: left;
    text-align: left;
    padding: 0px;
    height: 500px;
    overflow: auto;
  }

  .search-item {
    color: black;
    padding: 10px;
    border: 1px solid #ddd;
  }

  .search-item: hover {
    background: #ddd;
    cursor: pointer;
  }
`;

export function DiscoverPage(props) {
  useInjectReducer({ key: 'discoverPage', reducer });
  useInjectSaga({ key: 'discoverPage', saga });
  useEffect(() => {
    props.getPopularMovies('top_rated');
  }, []);
  const [visible, setVisible] = useState(false);
  const handleChange = event => {
    setValue(event.target.value);
    setVisible(true);
    props.startSearch(event.target.value);
  };

  const handleBlur = event => {
    setVisible(false);
    // setValue('');
    // props.startSearch(event.target.value);
  };
  const [value, setValue] = useState('');
  return (
    <Container>
      <div className="header">
        <div style={{ padding: '10px' }}>Discover</div>
        <div className="button-group">
          <button
            type="button"
            onClick={() => props.getPopularMovies('popular')}
          >
            Popular
          </button>
          <button
            type="button"
            onClick={() => props.getPopularMovies('now_playing')}
          >
            Trends
          </button>
          <button
            type="button"
            onClick={() => props.getPopularMovies('latest')}
          >
            Newest
          </button>
          <button
            type="button"
            onClick={() => props.getPopularMovies('top_rated')}
          >
            TopRated
          </button>
        </div>
        <div style={{ position: 'relative' }}>
          <input
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            type="search"
            className="search"
            placeholder="search movies"
          />
          {visible ? props.searchMovies && props.searchMovies.results.length && (
            <ul className="search-list">
              {props.searchMovies &&
                props.searchMovies.results.map(m => (
                  <li
                    onClick={event =>
                      event.nativeEvent.stopImmediatePropagation()
                    }
                    className="search-item"
                    key={m.title}
                  >
                    {m.title}
                  </li>
                ))}
            </ul>
          ) : null}
        </div>
      </div>
      <div className="movie-list">
        {props.movies &&
          props.movies.results &&
          props.movies.results.map(movie => {
            return <MovieCard movie={movie} />;
          })}
      </div>
    </Container>
  );
}

DiscoverPage.propTypes = {
  getPopularMovies: PropTypes.func.isRequired,
  movies: PropTypes.array,
  startSearch: PropTypes.func.isRequired,
  searchMovies: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  discoverPage: makeSelectDiscoverPage(),
  movies: makeSelectMovies(),
  searchMovies: makeSelectSearchMovies(),
});

function mapDispatchToProps(dispatch) {
  return {
    getPopularMovies: type => dispatch(getPopularMovies(type)),
    startSearch: movie => dispatch(startSearch(movie)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(DiscoverPage);
