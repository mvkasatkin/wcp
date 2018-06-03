import * as React from 'react'
import LoginContainer from '../containers/LoginContainer'
import MainContainer from '../containers/MainContainer'

export interface Props {
  loggedIn: boolean,
}

export default ({ loggedIn }: Props) => (
  <div>
    {
      loggedIn
        ? <MainContainer/>
        : <LoginContainer/>
    }
  </div>
)
