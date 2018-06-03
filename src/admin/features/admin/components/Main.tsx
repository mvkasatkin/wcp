import * as React from 'react'
import { Theme, WithStyles, withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Header from './Header'
import Side from './Side'

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
      <div className={classes.root}>
        <Header onLogout={onLogout} />
        <Side/>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography noWrap>{'Just a page, maybe dashboard'}</Typography>
        </main>
      </div>
    )
  }
}

export default withStyles(styles as any)(Main)
