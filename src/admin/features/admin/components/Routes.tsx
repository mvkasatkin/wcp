import * as React from 'react'
import { Route, Switch } from 'react-router'
import store from '../../../store'

interface Props {
}

class Component extends React.Component<Props> {
  render () {
    const state: any = store.getState()
    const routes: any[] = []

    state.nav.items.forEach((item: NavItem) => {
      if (item.route) {
        routes.push({ ...item.route, code: item.code })
      }
      if (item.children) {
        item.children.forEach((child: NavItem) => {
          if (child.route) {
            routes.push({ ...child.route, code: child.code })
          }
        })
      }
    })

    return (
      <Switch>
        <Route exact path={routes[0].path} component={routes[0].component}/>
        <Route exact path={routes[1].path} component={routes[1].component}/>
        <Route exact path={routes[2].path} component={routes[2].component}/>
        <Route exact path={routes[3].path} component={routes[3].component}/>
        {/*{routes.map(route => (*/}
          {/*<Route path={route.path}  component={route.component} key={route.code}/>*/}
        {/*))}*/}
      </Switch>
    )
  }
}

export default Component
