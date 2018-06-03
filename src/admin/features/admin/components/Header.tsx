import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton/IconButton'
import { ExitToApp } from '@material-ui/icons'

const styles = (theme: Theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 1,
  },
  flex: {
    flex: 1,
  },
})

interface Props {
  onLogout: () => void
}
type StyledProps = Props & WithStyles<keyof ReturnType<typeof styles>>

const Header: React.StatelessComponent<StyledProps> = ({ classes, onLogout }) => (
  <AppBar position="absolute" className={classes.root}>
    <Toolbar>
      <Typography variant="title" color="inherit" className={classes.flex}>
        WCP Admin
      </Typography>

      <IconButton onClick={onLogout} color="inherit">
        <ExitToApp />
      </IconButton>
    </Toolbar>
  </AppBar>
)

export default withStyles(styles as any)(Header)
