declare type NavItem = {
  code: string,
  title: string,
  toggled?: boolean,
  children?: NavItem[],
  route?: {path: string, component: React.ComponentType<any>},
}
