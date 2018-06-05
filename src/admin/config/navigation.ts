import { List as UserList } from '../features/user/components/List'
import { Settings } from '../features/settings/components/Settings'

const nav: NavItem[] = [
  {
    code: 'content',
    title: 'Контент',
    children: [],
  },
  {
    code: 'system',
    title: 'Система',
    toggled: true,
    children: [
      {
        code: 'user',
        title: 'Пользователи',
        route: { path: '/user', component: UserList },
      },
      {
        code: 'settings',
        title: 'Настройки',
        route: { path: '/settings', component: Settings },
      },
    ],
  },
]

export default nav
