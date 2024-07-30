const request = require('supertest');
require('dotenv').config();
const app = require('./server');

describe('API Key Tests', () => {
  it('should use the API key in the request', async () => {
    const apiKey = process.env.API_KEY_SPOON;

    const response = await request(app)
    //   .get('/api/endpoint')
      .set('Authorization', `Bearer ${apiKey}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('data');
  });

  it('should return unauthorized for incorrect API key', async () => {
    const response = await request(app)
    //   .get('/api/endpoint')
      .set('Authorization', 'Bearer wrongapikey');

    expect(response.statusCode).toBe(401);
    expect(response.body).toHaveProperty('error', 'Unauthorized');
  });
});
