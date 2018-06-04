import I from 'immutant'
import store, { nextState, IState } from '../../../store'

export class AdminService {
  store = store
  nextState = nextState

  /**
   * @param {string} login
   * @param {string} password
   */
  login = (login: string, password: string) => {
    if (login === 'admin' && password === '123qwe') {
      const user = { id: 1 }
      const state = I<IState>(this.store.getState()).set(user, ['auth', 'user']).result
      this.nextState(state)
    } else {
      const state = I<IState>(this.store.getState()).set(true, ['auth', 'hasError']).result
      this.nextState(state)
    }
  }

  logout = () => {
    const state = I<IState>(this.store.getState()).delete(['auth', 'user']).result
    this.nextState(state)
  }

  toggleItem = (item: NavItem) => {
    const state = I<IState>(this.store.getState())
      .set(!item.toggled, ['nav', 'items', i => i.code === item.code, 'toggled'])
      .result
    this.nextState(state)
  }
}

export default new AdminService()
