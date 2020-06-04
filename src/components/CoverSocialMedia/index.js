import React from 'react';

import { FaInstagram, FaTelegram, FaTwitter, FaGithub } from 'react-icons/fa';
import { Container } from './style';

function CoverSocialMedia() {
  return (
    <Container>
      <ul className="social-list">
        <li className="list-item">
          <a href="http://localhost:3000/" target="__blank">
            <FaInstagram />
          </a>
        </li>
        <li className="list-item">
          <a href="http://localhost:3000/" target="__blank">
            <FaTelegram />
          </a>
        </li>
        <li className="list-item">
          <a href="http://localhost:3000/" target="__blank">
            <FaTwitter />
          </a>
        </li>
        <li className="list-item">
          <a href="http://localhost:3000/" target="__blank">
            <FaGithub />
          </a>
        </li>
      </ul>
    </Container>
  );
}

export default CoverSocialMedia;
