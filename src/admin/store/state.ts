export interface IState {
  admin: {
    hasError: boolean,
    user?: {
      id: number,
    },
  },
}

export const initialState: IState = {
  admin: {
    hasError: false,
    user: undefined,
  },
}
