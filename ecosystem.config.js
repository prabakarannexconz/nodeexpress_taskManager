module.exports = {
apps : [
    {
      name: 'prabakaran project',
      script: './src/index.js',
      log: '.logs/combined.outerr.log',
      watch: true,
      ignore_watch: ['logs/*', 'downloads/*'],
      env_staging: {
        NODE_ENV: 'staging',
        NODE_APP_INSTANCE: 'prabakaran project',
      },
      env_production:{
        NODE_ENV: 'production',
        NODE_APP_INSTANCE: 'prabakaran project',
      }, 
    },
],

}