import { css } from "@emotion/react";

export const globalStyle = css`
  html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;

    font-family: "Pretendard", sans-serif;
  }

  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  ion-modal {
    --box-shadow: 0px -6px 16px rgba(174, 174, 178, 0.5);
  }
`;
