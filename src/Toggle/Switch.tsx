import React from 'react'
import { SwitchWrapper } from './Switch.styled'

interface ISwitchProps {
  on: boolean
  className?: string
}
class Switch extends React.Component<ISwitchProps> {
  render() {
    const { on, className = '', ...props } = this.props
    const btnClassName = [
      className,
      'toggle-btn',
      on ? 'toggle-btn-on' : 'toggle-btn-off'
    ]
      .filter(Boolean)
      .join(' ')
    return (
      <SwitchWrapper>
        <input
          className='toggle-input'
          type='checkbox'
          checked={on}
          onChange={() => {
            // changing is handled by clicking the button
          }}
        />
        <button className={btnClassName} aria-label='Toggle' {...props} />
      </SwitchWrapper>
    )
  }
}

export { Switch }
