module.exports = function () {
  return {
    files: [
      'src/**/*.js' // adjust if required 
    ],

    tests: [
      'test/**/*.spec.js' // adjust if required
    ],


    env: {
      type: 'node',
      params: {
        runner: `-r ${require.resolve('esm')}`
      }
    }
  };
};
