import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback
} from 'react'
import {
  DropdownWrapper,
  DropdownSelection,
  DropdownPlaceholder,
  DropdownContent,
  DropdownItem
} from './Dropdown.styled'

interface IDropdownContext {
  selected: string
  setSelected: any
  setActive: any
}

const DropdownContext = React.createContext({} as IDropdownContext)

function useDropdownContext() {
  const context = useContext(DropdownContext)
  if (!context) {
    throw new Error(
      `Dropdown compound components cannot be rendered outside the Dropdown component`
    )
  }
  return context
}

interface ItemProps {
  children: string | JSX.Element
}

function Item({ children }: ItemProps) {
  const { selected, setSelected, setActive } = useDropdownContext()

  const handleSelection = useCallback(() => {
    setSelected(children)
    setActive(false)
  }, [children, setActive, setSelected])

  return children ? (
    <DropdownItem isActive={selected === children} onClick={handleSelection}>
      {children}
    </DropdownItem>
  ) : null
}

interface IDropdownProps {
  children: JSX.Element[] | JSX.Element
  defaultValue?: string
}

export function Dropdown({ children, defaultValue }: IDropdownProps) {
  const [selected, setSelected] = useState(defaultValue || '')
  const [active, setActive] = useState(false)
  const contentRef = useRef<any>()

  const handleClickOutside = useCallback((event) => {
    if (contentRef.current && !contentRef.current.contains(event.target)) {
      setActive(false)
    }
  }, [])

  useEffect(() => {
    if (active) {
      document.addEventListener('click', handleClickOutside)
    } else {
      document.removeEventListener('click', handleClickOutside)
    }
    return () => document.removeEventListener('click', handleClickOutside)
  }, [active, handleClickOutside])

  return (
    <DropdownContext.Provider
      value={{
        selected,
        setSelected,
        setActive
      }}
    >
      <DropdownWrapper>
        <DropdownSelection onClick={() => setActive(true)}>
          {selected || (
            <DropdownPlaceholder>Select an option</DropdownPlaceholder>
          )}
        </DropdownSelection>
        {active && (
          <DropdownContent ref={contentRef}>{children}</DropdownContent>
        )}
      </DropdownWrapper>
    </DropdownContext.Provider>
  )
}
Dropdown.Item = Item
