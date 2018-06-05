declare type NavRoute = {
  path: string,
  component: React.ComponentType<any>,
  default?: boolean,
}

declare type NavItem = {
  code: string,
  title: string,
  toggled?: boolean,
  children?: NavItem[],
  route?: NavRoute,
}

declare module '@reach/router' {
export const Router: any
export const Link: any
}
