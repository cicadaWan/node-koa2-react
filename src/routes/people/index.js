export default {
  path: 'people',
  getComponent(nextProps,cb) {
    require.ensure(
      [],
      require => {
        cb(null, require('../../pages/people').default)
      },
      'People'
    );
  }
};