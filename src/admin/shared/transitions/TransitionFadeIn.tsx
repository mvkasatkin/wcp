import * as React from 'react'
import { Animate } from 'react-move'
import * as Ease from 'd3-ease'

interface Props {
  duration: number,
  children: React.ReactElement<any>,
  delay?: number,
  ease?: (n: number) => number,
}

export default function (props: Props) {
  const { children, duration } = props
  const params = {
    show: true,
    start: { },
    enter: {
      opacity: [0, 1],
      timing: {
        duration,
        delay: props.delay || 0,
        ease: props.ease || Ease.easeCubicOut,
      },
    },
    update: {},
    leave: {},
  }

  return (
    <Animate {...params}>
      {styles => React.cloneElement(children, { ...children.props, style: styles })}
    </Animate>
  )
}
