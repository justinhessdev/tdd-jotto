import React from 'react'
import { Switch } from './Switch'

interface IToggleContext {
  on: boolean
  toggle: () => void
}

const ToggleContext = React.createContext({} as IToggleContext)

function useEffectAfterMount(cb: any, dependencies: any) {
  const justMounted = React.useRef(true)
  React.useEffect(() => {
    if (!justMounted.current) {
      return cb()
    }
    justMounted.current = false
  }, dependencies)
}

interface IToggleProps {
  children: JSX.Element[] | JSX.Element
  onToggle: any
}
export function Toggle({ children, onToggle }: IToggleProps) {
  const [on, setOn] = React.useState(false)
  const toggle = React.useCallback(() => setOn((oldOn) => !oldOn), [])
  useEffectAfterMount(() => {
    onToggle(on)
  }, [on])
  const value = React.useMemo(() => ({ on, toggle }), [on])
  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  )
}

function useToggleContext() {
  const context = React.useContext(ToggleContext)
  if (!context) {
    throw new Error(
      `Toggle compound components cannot be rendered outside the Toggle component`
    )
  }
  return context
}

function On({ children }: any) {
  const { on } = useToggleContext()
  return on ? children : null
}

function Off({ children }: any) {
  const { on } = useToggleContext()
  return on ? null : children
}

function Button(props: any) {
  const { on, toggle } = useToggleContext()
  return <Switch on={on} onClick={toggle} {...props} />
}

Toggle.On = On
Toggle.Off = Off
Toggle.Button = Button
