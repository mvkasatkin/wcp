import { createStore, applyMiddleware, AnyAction, DeepPartial } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { IState, initialState } from './state'

export const NEXT_STATE = Symbol('@nextState')
export type IState = IState

const reducer = (state: IState, action: AnyAction) => {
  const nextState = (action.type === NEXT_STATE)
    ? action.state
    : state
  return { ...nextState, router: routerReducer(nextState.router, action) }
}

export const browserHistory = createHistory()
const middleware = applyMiddleware(routerMiddleware(browserHistory))

const store = createStore(reducer, initialState as DeepPartial<{}>, middleware)
export const nextState = (state: IState, comment?: string) => {
  store.dispatch({ state, comment, type: NEXT_STATE })
}

export default store
