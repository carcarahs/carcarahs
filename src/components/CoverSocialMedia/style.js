import styled from 'styled-components';
import { STYLE_CONTEXT, METRICS } from '../../style/variables';

export const Container = styled.div`
  display: flex;
  width: 350px;
  height: 100px;

  .social-list {
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    width: 100%;
    margin: auto;

    .list-item {
      display: inline-block;
      font-size: 30pt;
      padding: ${METRICS.$padding};

      > a {
        color: ${STYLE_CONTEXT.$text_color_white};
      }
    }
  }
`;
