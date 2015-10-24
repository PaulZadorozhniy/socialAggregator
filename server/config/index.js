module.exports = {
  http: {
    host: 'http://localhost',
    port: process.env.PORT || 3000
  },
  db: {},
  session: {
    secret: 'paul'
  },
  auth: {
    google: {
      client_id: '',
      client_secret: '',
      redirect_uri: '',
      scope: []
    }
  },
  jwt: {
    secret: ''
  },
  token: {
    name: {
      cookie: 'XSRF-TOKEN',
      header: 'X-XSRF-TOKEN'.toLowerCase()
    }
  }
};