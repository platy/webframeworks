// http://expressjs.com/starter/static-files.html

module.exports = function(express, app) {
  app.use('/static', express.static('../../shared/static'));
}
