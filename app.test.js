const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('Hi Howday, Ahmad!'));

test('GET / should return "Hi Howday, Ahmad!"', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hi Howday, Ahmad!');
});
