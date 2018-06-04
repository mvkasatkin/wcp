import * as React from 'react'
import { Animate, PlainObject, PlainObjectFunction, Transition, TransitionFunction } from 'react-move'

interface Props {
  show?: boolean
  start: PlainObjectFunction | PlainObject
  enter?: TransitionFunction | Transition | Transition[]
  update?: TransitionFunction | Transition | Transition[]
  leave?: TransitionFunction | Transition | Transition[]
  children: React.ReactElement<any>
}

export default function (props: Props) {
  const { children } = props

  return (
    <Animate {...props}>
      {styles => React.cloneElement(children, { ...children.props, style: styles })}
    </Animate>
  )
}
