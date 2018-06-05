import * as React from 'react'
import { Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import TransitionPage from './TransitionPage'
import LoginContainer from '../containers/LoginContainer'
import SideContainer from '../containers/SideContainer'
import Header from './Header'
import Router from './Routing'

export interface Props {
  loggedIn: boolean,
  onLogout: () => void,
}
type StyledProps = Props & WithStyles<keyof ReturnType<typeof styles>>

class Admin extends React.Component<StyledProps> {
  render () {
    const { loggedIn, onLogout, classes } = this.props

    return (
      !loggedIn
        ? <LoginContainer/>
        : (
          <TransitionPage>
            <div className={classes.root}>
              <Header onLogout={onLogout} />
              <SideContainer/>

              <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Router/>
              </main>
            </div>
          </TransitionPage>
        )
    )
  }
}

const styles = (theme: Theme) => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0,
  },
  toolbar: theme.mixins.toolbar,
})

export default withStyles(styles as any)(Admin)
