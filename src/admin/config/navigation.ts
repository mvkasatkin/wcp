import Page1 from '../features/tmp/Page1'
import Page2 from '../features/tmp/Page2'
import Page3 from '../features/tmp/Page3'
import Page4 from '../features/tmp/Page4'

const nav: NavItem[] = [
  {
    code: 'section1',
    title: 'Section 1',
    children: [
      {
        code: 'page1',
        title: 'Page 1',
        route: { path: '/page1', component: Page1 },
      },
      {
        code: 'page2',
        title: 'Page 2',
        route: { path: '/page2', component: Page2 },
      },
    ],
  },
  {
    code: 'section2',
    title: 'Section 2',
    children: [
      {
        code: 'page3',
        title: 'Page 3',
        route: { path: '/page3', component: Page3 },
      },
      {
        code: 'page4',
        title: 'Page 4',
        route: { path: '/page4', component: Page4 },
      },
    ],
  },
]

export default nav
