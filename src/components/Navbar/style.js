import styled from 'styled-components';

import { COLORS, STYLE_CONTEXT } from '../../style/variables';

export const Container = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  top: 0;
  left: 0;
  padding: 0 1rem;
  background-color: ${COLORS.$blue_7};
  z-index: 100;

  .navbar {
    display: flex;
    align-items: center;
    list-style: none;
    margin-left: auto;

    .item {
      display: inline-block;
      margin: 0 0.5rem;
      font-family: 'Raleway', sans-serif;
      font-weight: bold;
      text-transform: uppercase;
      color: ${COLORS.$blue_2};
      font-size: ${STYLE_CONTEXT.$button_font_size};

      &.diff {
        padding: 0.25rem 0.5rem;
        border: 1px solid ${COLORS.$blue_2};
        border-radius: 1rem;
      }
    }
  }
`;
