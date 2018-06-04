import * as React from 'react'
import Transition from '../../../shared/Transition'
import * as Ease from 'd3-ease'

interface Props {
  children: React.ReactElement<any>
}

export default function (props: Props) {
  const { children } = props
  const height = 40
  const duration = 700
  const params = {
    start: {},
    enter: {
      opacity: [0, 1],
      transform: (t: number) => `translateY(${height * (1 - t)}px)`,
      timing: {
        duration,
        ease: Ease.easePolyOut,
      },
    },
  }

  return (
    <Transition {...params}>{children}</Transition>
  )
}
