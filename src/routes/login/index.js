export default {
  path: 'login',
  getComponent(nextProps, cb) {
    require.ensure(
      [],
      require => {
        cb(null,require('../../pages/login').default)
      },
      'login'
    )
  }
}