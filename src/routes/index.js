export default {
  path: '/',
  component: require('../App.js').default,
  childRoutes: [
    require('./register/index').default,
    require('./login/index').default,
    require('./home/index').default,
    require('./company/index').default, 
    require('./column/index').default,
    require('./hook/index').default,
  ]
}

