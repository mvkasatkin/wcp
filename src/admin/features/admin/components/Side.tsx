import * as React from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem/ListItem'
import { Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import Collapse from '@material-ui/core/Collapse/Collapse'
import Typography from '@material-ui/core/Typography/Typography'
import { NavLink } from 'react-router-dom'

const styles = (theme: Theme) => ({
  paper: {
    position: 'relative',
    width: 240,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 6,
  },
  link: {
    display: 'block',
    textDecoration: 'none',
    '&.active span': {
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.primary.main,
    },
  },
  toolbar: theme.mixins.toolbar,
})

export interface Props {
  items: NavItem[],
  toggleItem: (item: NavItem) => void
}
type StyledProps = Props & WithStyles<keyof ReturnType<typeof styles>>

class Side extends React.Component<StyledProps> {
  render () {
    const { classes, items } = this.props

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.paper,
        }}
      >
        <div className={classes.toolbar} />
        <List component="nav">
          {items.map(item => this.renderItem(item))}
        </List>
      </Drawer>
    )
  }

  renderItem (item: NavItem) {
    const { toggleItem } = this.props
    return (
      <div key={item.title}>
        <ListItem onClick={() => toggleItem(item)} button dense>
          <Typography variant={'subheading'}>{item.title}</Typography>
        </ListItem>
        {item.children && (
          <Collapse in={item.toggled} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.children.map(item => this.renderChild(item))}
            </List>
          </Collapse>
        )}
      </div>
    )
  }

  renderChild (item: NavItem) {
    const { classes } = this.props

    return (
      <NavLink exact to={item.route ? item.route.path : ''} className={classes.link} key={item.title}>
        <ListItem button dense className={classes.nested}>
          <Typography component={'span'}>{item.title}</Typography>
        </ListItem>
      </NavLink>
    )
  }
}

export default withStyles(styles as any)(Side)
