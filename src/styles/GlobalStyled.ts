import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --gray100-color: rgba(55, 53, 47, 0.08);  // 사이드바 배경색
    --gray200-color: #d9d9d9;
    --gray300-color: #37352f14;
    --gray400-color: #37352f4d;
    --gray500-color: #767676;
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
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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