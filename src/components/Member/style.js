import styled from 'styled-components';

import { STYLE_CONTEXT } from '../../style/variables';

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 130px;
  height: 150px;

  .circle {
    width: 120px;
    min-height: 120px;
    margin: auto;
    margin-bottom: 1rem;
    border-radius: 50%;
    background-color: ${STYLE_CONTEXT.$text_color_light};
  }

  .thumb {
    width: 100%;
    height: auto;
  }

  .name {
    color: ${STYLE_CONTEXT.$text_color_light};
    text-align: center;
  }
`;
