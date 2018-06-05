import * as React from 'react'
import { Router } from '@reach/router'
import navItems from '../../../config/navigation'

interface Props {
}

class Routing extends React.Component<Props> {

  /**
   * Collect all {route}'s from navigation
   */
  routes (items: NavItem[] = navItems, routes: NavRoute[] = []): NavRoute[] {
    return items.reduce(
      (r: NavRoute[], i: NavItem): NavRoute[] => {
        if (i.route) r.push(i.route); return (i.children) ? this.routes(i.children, r) : r
      },
      routes,
    )
  }

  render () {
    return (
      <Router>
        {this.routes().map((route, k) => (
          React.createElement(route.component, {
            path: route.path,
            default: route.default,
            key: k,
          })
        ))}
      </Router>
    )
  }
}

export default Routing
