export default {
  path: 'hook',
  getComponent(nextProps, cb) {
    require.ensure(
      [],
      require => {
        cb(null,require('../../pages/hook').default)
      },
      'hook'
    )
  }
}