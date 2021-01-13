import styled from "styled-components";

export const Styled = (Component, css) => {
  return styled(Component)`
    ${css}
  `;
};
