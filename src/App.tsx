import * as React from 'react'
import { Dropdown, SearchDropdown } from 'j-components-react'

const items = [
  { id: '1', text: 'Red', value: 're' },
  { id: '2', text: 'Yellow', value: 'ye' },
  { id: '3', text: 'Green', value: 'gr' },
  { id: '4', text: 'Blue', value: 'bl' },
  { id: '5', text: 'Purple', value: 'pu' }
]

const items2 = [
  { id: '1', text: 'Apple', value: 'ap' },
  { id: '2', text: 'Banana', value: 'ba' },
  { id: '3', text: 'Avocado', value: 'av' },
  { id: '4', text: 'Eggs', value: 'eg' },
  { id: '5', text: 'Toast', value: 'to' }
]

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '3em'
      }}
    >
      <SearchDropdown items={items} defaultValue={'Blue'}>
        {items.map((item) => (
          <SearchDropdown.Item
            key={item.id} // required
            filterKey={item.id} // required
          >
            {item.text}
          </SearchDropdown.Item>
        ))}
      </SearchDropdown>
      <Dropdown>
        {items2.map((item) => (
          <Dropdown.Item key={item.id}>{item.text}</Dropdown.Item>
        ))}
      </Dropdown>
      {/* <Toggle onToggle={(on) => console.log(on)}>
        <Toggle.On>The button is on</Toggle.On>
        <Toggle.Off>The button is off</Toggle.Off>
        <Toggle.Button />
      </Toggle> */}
    </div>
  )
}

export default App
