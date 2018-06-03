import I from 'immutant'
import store, { nextState, IState } from '../../../store'

interface IFace {
  login: (login: string, password: string) => void,
}

export class AdminService implements IFace {
  store = store
  nextState = nextState

  /**
   * @param {string} login
   * @param {string} password
   */
  login = (login: string, password: string) => {
    if (login === 'admin' && password === '123qwe') {
      const user = { id: 1 }
      const state = I<IState>(this.store.getState()).set(user, ['admin', 'user']).result
      this.nextState(state)
    } else {
      const state = I<IState>(this.store.getState()).set(true, ['admin', 'hasError']).result
      this.nextState(state)
    }
  }

  logout = () => {
    const state = I<IState>(this.store.getState()).delete(['admin', 'user']).result
    this.nextState(state)
  }
}

export default new AdminService()
