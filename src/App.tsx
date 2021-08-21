import React from "react"
import { createGlobalStyle } from "styled-components"
import TodoApp from "./components/TodoApp"

const GlobalStyles = createGlobalStyle`
  :root {
    --orange: #ffc600;
    --blue: #2199e8;
    --darkBlue: #08658a;
    --black: #393939;
    --gray: #3A3A3A;
    --lightGray: #E1E1E1;
    --white: #EDEDED;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0, 0, 0, 0.2);
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: var(--lightGray);
    padding: 0;
    margin: 0;
    color: #fff;
    font-size: 1.5rem;
    line-height: 2;
  }

  .header {
    grid-area: header;
    background-color: var(--darkBlue);
    margin-top: 1rem;
    border-radius: 10px 10px 0 0;
    text-align: center;
  }

  .main {
    grid-area: main;
    background-color: var(--blue);
  }

  .footer {
    grid-area: footer;
    background-color: var(--blue);
    margin-bottom: 1rem;
    border-radius: 0 0 10px 10px;
  }
`

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <TodoApp />
    </>
  )
}

export default App
