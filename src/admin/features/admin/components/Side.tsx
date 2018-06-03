import * as React from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem/ListItem'
import ListItemText from '@material-ui/core/ListItemText/ListItemText'
import { Theme, withStyles, WithStyles } from '@material-ui/core/styles'

const styles = (theme: Theme) => ({
  paper: {
    position: 'relative',
    width: 240,
  },
  toolbar: theme.mixins.toolbar,
})

interface Props {
}
type StyledProps = Props & WithStyles<keyof ReturnType<typeof styles>>

const Side: React.StatelessComponent<StyledProps> = ({ classes }) => (
  <Drawer
    variant="permanent"
    classes={{
      paper: classes.paper,
    }}
  >
    <div className={classes.toolbar} />
    <List component="nav">
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem>
      <ListItem button component="a" href="#simple-list">
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
  </Drawer>
)

export default withStyles(styles as any)(Side)
