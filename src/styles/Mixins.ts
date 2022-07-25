import { css, keyframes } from "@emotion/react";

export const fixRowFlexItemOverflow = css`
  min-width: 0;
`;

export const fixColumnFlexItemOverflow = css`
  min-height: 0;
`;

export const zoomAndFadeInAnimation = keyframes`
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const zoomAndFadeInStyle = css`
  transform-origin: center;
  transform: scale(0.7);
  opacity: 0;
  animation: ${zoomAndFadeInAnimation} 0.3s forwards;
`;
