// const request = require('supertest')
// const app = require('../src/app')
// describe('Post Endpoints', () => {
//   it('should create a new books', async () => {
//     const res = await request(app)
//       .post('/add-book')
//       .send({
//         title: 'this is cool book',
//         author: 'written by cool author',
//         done: true,
//       })
//     expect(res.statusCode).toEqual(201)
//     expect(res.body).toHaveProperty('message')
//     expect(res.body).toHaveProperty('book')
//     expect(res.body).toHaveProperty('books')
//   })
// })