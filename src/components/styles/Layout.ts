import styled from "styled-components"

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 75vh auto;
  grid-template-areas:
    ". header ."
    ". main ."
    ". footer .";
`

export const Container = styled.div`
  margin: 0 auto;
  width: 80%;
`
