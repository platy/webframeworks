"use strict"

var should = require('chai').should(),
    supertest = require('supertest'),
    exec = require('child_process').exec,
    timers = require('timers'),
    examples = require('./examples.js');

var express_server;
before(function(done) {
  express_server = exec('node index.js', {cwd: '../node/express'}, function(error, stdout, stderr) {
   if (error) {
     console.log(error.stack);
     console.log('Error code: '+error.code);
     console.log('Signal received: '+error.signal);
   }
   console.log('Child Process STDOUT: '+stdout);
   console.log('Child Process STDERR: '+stderr);
  });
  timers.setTimeout(done, 1000);
});
after(function() {
  express_server.kill();
});

var api = supertest('http://localhost:3000');

describe('Express', function() {
  examples(api);
});
