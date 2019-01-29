export default [
  {
    title: '饼图',
    path: '',
    component: () => import('./pie.md')
  },

  {
    title: '环图',
    path: 'dounght',
    component: () => import('./dounght.md')
  },

  {
    title: '玫瑰图',
    path: 'rose',
    component: () => import('./rose.md')
  },

  {
    title: '图表组合',
    path: 'compose',
    component: () => import('./compose.md')
  },

  {
    title: '图表联动',
    path: 'link',
    component: () => import('./link.md')
  },

  {
    title: '主题切换',
    path: 'theme',
    component: () => import('./theme.md')
  },

  {
    title: '个性化',
    path: 'personalise',
    component: () => import('./personalise.md')
  }
]
