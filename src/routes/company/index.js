export default {
  path: 'company',
  getComponent(nextProps, cb) {
    require.ensure(
      [],
      require => {
        cb(null,require('../../pages/company').default)
      },
      'List'
    )
  }
}