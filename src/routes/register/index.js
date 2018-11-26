export default {
  path: 'register',
  getComponent(nextProps, cb) {
    require.ensure(
      [],
      require => {
        cb(null,require('../../pages/register').default)
      },
      'register'
    )
  }
}