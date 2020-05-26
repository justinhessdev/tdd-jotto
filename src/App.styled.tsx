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
  align-items: center;
  text-align: center;
`
export const AppHeader = styled.div`
  display: flex;
  flex-direction: column;
  height: 20em;
  justify-content: center;
`
