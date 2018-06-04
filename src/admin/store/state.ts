import navItems from '../config/navigation'

export interface IState {
  auth: {
    hasError: boolean,
    user?: {
      id: number,
    },
  },
  nav: {
    items: NavItem[],
  },
}

export const initialState: IState = {
  auth: {
    hasError: false,
    user: { id: 1 },
  },
  nav: {
    items: navItems,
  },
}
