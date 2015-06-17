"use strict"

// api is a supertest api, pointing to an initialised server
module.exports = function(api) {
  describe('express-basic-routing', function() {

    it('GET / returns text', function(done) {
      api.get('/')
      .expect(200, 'Hello World!', done)
    });

    it('POST / returns text', function(done) {
      api.post('/')
      .expect(200, 'Got a POST request', done)
    });

    it('PUT /users returns text', function(done) {
      api.put('/user')
      .expect(200, 'Got a PUT request at /user', done)
    });

    it('DELETE / returns text', function(done) {
      api.delete('/user')
      .expect(200, 'Got a DELETE request at /user', done)
    });
  });

  describe('express-static', function() {

    it('GET /static/hello.html returns static file contents', function(done) {
      api.get('/static/hello.html')
      .expect(200, '<h1>HELLO</h1>\n', done)
    });
  });
};
