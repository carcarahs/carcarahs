import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './style';

function Member({ name, thumb }) {
  return (
    <Container>
      <span className="circle">
        <img className="thumb" href={thumb} alt={name} />
      </span>
      <h4 className="name">{name}</h4>
    </Container>
  );
}

Member.propTypes = {
  name: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
};

export default Member;
