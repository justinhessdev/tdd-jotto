import React from 'react'
import Counter from './Counter'
import { GlobalStyle, AppWrapper, AppHeader } from './App.styled'

const App = () => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <AppHeader>
        <div>Hello World</div>
        <Counter />
      </AppHeader>
    </AppWrapper>
  )
}

export default App
