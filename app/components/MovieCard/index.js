/**
 *
 * MovieCard
 *
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid #ddd;
  margin: 10px;
  padding: 10px;
`;
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function MovieCard(props) {
  console.log(props.movie);
  return (
    <Container>
      <span>{props.movie.title}</span>
    </Container>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.any,
};

export default MovieCard;
