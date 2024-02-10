const http = require('http');
const server = require('./index');

describe('Server', () => {
  afterAll((done) => {
    server.close(done);
  });

  it('responds to requests', (done) => {
    http.get('http://localhost:3000/', (res) => {
      expect(res.statusCode).toBe(200);
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        expect(data).toBe('Hello, World!\n');
        done();
      });
    });
  });
});