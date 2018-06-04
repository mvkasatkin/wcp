import * as React from 'react'
import { Animate } from 'react-move'
import { TransitionParams } from '../../config/transitions'

interface Props {
  params: TransitionParams,
  children: React.ReactElement<any>,
}

export default function (props: Props) {
  const { children, params } = props

  return (
    <Animate {...params}>
      {styles => React.cloneElement(children, { ...children.props, style: styles })}
    </Animate>
  )
}
