import { PlainObject, Transition } from 'react-move/core'
import * as Ease from 'd3-ease'

export interface TransitionParams {
  show?: boolean,
  start?: Transition & PlainObject,
  enter?: Transition & PlainObject,
  update?: Transition & PlainObject,
  leave?: Transition & PlainObject,
}

export const EffectComeIn = (height: number, duration: number = 500, delay: number = 0): TransitionParams => ({
  enter: {
    opacity: [0, 1],
    transform: (t: number) => `translateY(${height * (1 - t)}px) scale(${0.5 + t / 2})`,
    timing: {
      duration,
      delay: delay || 0,
      ease: Ease.easeCubicOut,
    },
  },
})

export const EffectFadeIn = (duration: number = 500, delay: number = 0): TransitionParams => ({
  enter: {
    opacity: [0, 1],
    timing: {
      duration,
      delay: delay || 0,
      ease: Ease.easeCubicOut,
    },
  },
})
