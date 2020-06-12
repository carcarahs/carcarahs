import React from 'react';

import { Container } from './style';

export default function Navbar() {
  return (
    <Container>
      <img alt="Logo Carcará" />

      <ul className="navbar">
        <li className="item">
          <a className="item" href="#about">
            Quem somos?
          </a>
        </li>
        <li className="item">
          <a className="item" href="#about">
            Projetos
          </a>
        </li>
        <li className="item">
          <a className="item" href="#about">
            Blog
          </a>
        </li>
        <li className="item">
          <a className="item" href="#about">
            Doações
          </a>
        </li>
        <li className="item diff">
          <a className="item" href="#about">
            Contato
          </a>
        </li>
      </ul>
    </Container>
  );
}
