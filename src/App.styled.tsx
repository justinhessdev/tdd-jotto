import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    height: 100vh;

    #root {
        height: inherit;
    }
  }
`
export const AppWrapper = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
`
export const JottoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10em;
`
