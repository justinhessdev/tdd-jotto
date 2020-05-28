import React from 'react'
import Counter from './Counter'
import { GlobalStyle, AppWrapper, AppHeader } from './App.styled'

const App = () => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <AppHeader>
        <div className='welcome-to-the-jungle'>Hello World</div>
        <Counter />
      </AppHeader>
    </AppWrapper>
  )
}

export default App
