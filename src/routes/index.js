export default {
  path: '/',
  component: require('../App').default,
  childRoutes: [
    require('./home/index').default,
    require('./register/index').default,
    require('./login/index').default,
    require('./people/index').default,
    require('./company/index').default, 
    require('./column/index').default,
    require('./hook/index').default,
  ]
}

