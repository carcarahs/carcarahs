import styled from 'styled-components';

import { STYLE_CONTEXT } from '../../style/variables';

export const Container = styled.div`
  width: 100%;

  .text {
    width: 100%;
    padding: 1.5rem 0;

    p {
      margin-bottom: 0.5rem;
      line-height: 1.5;
      color: ${STYLE_CONTEXT.$text_color_light};
      font-size: 1.1rem;
    }
  }

  .sub-title {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 28pt;
    color: ${STYLE_CONTEXT.$text_color_white};
    font-weight: normal;
  }

  .carousel {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 250px;
  }
`;
