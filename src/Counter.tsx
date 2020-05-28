import React, { Component } from 'react'

type MyProps = {}
type MyState = { counter: number }
class Counter extends Component<MyProps, MyState> {
  constructor(props: any) {
    super(props)

    this.state = {
      counter: 0
    }
  }

  render() {
    const { counter } = this.state
    return (
      <div data-test='component-counter'>
        <h1 data-test='counter-display'>The count is {counter}</h1>
        <button
          data-test='increment-button'
          onClick={() =>
            this.setState((prevState) => {
              return {
                ...prevState,
                counter: prevState.counter + 1
              }
            })
          }
        >
          Increment
        </button>
        <button
          data-test='decrement-button'
          onClick={() =>
            this.setState((prevState) => {
              return {
                ...prevState,
                counter: prevState.counter - 1
              }
            })
          }
        >
          Decrement
        </button>
      </div>
    )
  }
}

export default Counter
