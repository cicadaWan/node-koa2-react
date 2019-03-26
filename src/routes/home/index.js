export default {
  path: '/home',
  getComponent(nextProps, cb) {
    require.ensure(
      [],
      require => {
        cb(null,require('../../pages/home/index').default)
      },
      'Home'
    )
  }
}