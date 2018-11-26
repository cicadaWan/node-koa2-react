export default {
  path: '/management',
  getComponent(nextProps, cb) {
    require.ensure(
      [],
      require => {
        cb(null,require('../../pages/columnmanage/index').default)
      },
      'Column'
    )
  }
}