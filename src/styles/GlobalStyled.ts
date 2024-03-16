import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  :root {
    --gray100-color: #f7f6f3;  // 사이드바 배경색
    --gray200-color: #d9d9d9;
    --gray300-color: #37352f14;
    --gray400-color: #37352f4d;
    --gray500-color: #525252;
    --gray600-color: #37352f;
    --modal-bg-color: rgba(0, 0, 0, 0.55);
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: "Pretendard-Regular", sans-serif;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  button {
    font: inherit;
    color: inherit;
    border: 0;
    margin: 0;
    padding: 0;
    background-color: initial;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  hr {
    width: 100%;
    margin: 1.5rem 0px;
    border: 0.5px solid var(--gray200-color);
  }

  h1 {
    font-size: 20px;
    padding: 8px 0;
  }

  h2 {
    font-size: 18px;
    margin-bottom: 8px;
  }

  h3 {
    font-size: 15px;
    color: #596e84;
    margin-bottom: 8px;
  }

  .react-tooltip-content-wrapper h3 {
    font-size: inherit;
    color: inherit;
    margin: 0;
  }

  h4 {
    font-size: 13px;
    margin-bottom: 13px;
  }

  .quotation {
    width: 100%;
    padding-left: 14px;
    padding-right: 14px;
    border-left: 3px solid currentcolor;
    margin-bottom: 15px;
    font-size: 15px;

    & > strong {
      font-size: 16px;
    }

    & > span {
      margin-left: 10px;
      color: #98a8b9;
      font-size: 0.9rem;
    }
  };

  .techListUl {
    display: flex;
    align-items: center;
    gap: 5px;
    border-radius: 5px;
    font-size: 12px;
    white-space: nowrap;
    padding: 0 12px;
    overflow: hidden;
  }

  .techListLi {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    min-width: 0px;
    max-width: 100%;
    height: 18px;
    border-radius: 3px;
    padding-left: 6px;
    padding-right: 6px;
    font-size: 12px;
    line-height: 120%;
    margin: 0px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* 기본 스크롤바 스타일링 */
  *::-webkit-scrollbar {
    background-color: inherit;
    width: 1rem;
  }
  *::-webkit-scrollbar-track {
    background-color: inherit;
  }
  *::-webkit-scrollbar-track:hover {
    background-color: inherit;
  }
  *::-webkit-scrollbar-thumb {
    background-color: var(--gray200-color);
    border: 4px solid #fff;
    border-radius: 1rem;
  }
  *::-webkit-scrollbar-thumb:hover {
    background-color: var(--gray300-color);
  }
`;
