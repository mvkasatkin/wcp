import * as React from 'react'
import { Theme, WithStyles, withStyles } from '@material-ui/core/styles'
import Header from './Header'
import SideContainer from '../containers/SideContainer'
import Routes from './Routes'
import TransitionPage from './TransitionPage'

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
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
})

export interface Props {
  onLogout: () => void,
}
type StyledProps = Props & WithStyles<keyof ReturnType<typeof styles>>

class Main extends React.Component<StyledProps> {
  render () {
    const { classes, onLogout } = this.props

    return (
      <TransitionPage>
        <div className={classes.root}>
          <Header onLogout={onLogout} />
          <SideContainer/>

          <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Routes/>
          </main>
        </div>
      </TransitionPage>
    )
  }
}

export default withStyles(styles as any)(Main)
