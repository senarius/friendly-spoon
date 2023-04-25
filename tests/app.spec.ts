import app from '../src/app'
import * as db from './db'
import supertest from 'supertest'

const request = supertest(app)

beforeAll(async () => await db.connect())

afterEach(async () => await db.clearDatabase())

afterAll(async () => await db.closeDatabase())

describe('tesst jest', () => {
	test('GET - /', async () => {
		const res = await request.get('/').send()
		const body = res.body
		const message = body.message
		expect(res.statusCode).toBe(200)
		expect(message).toBe('Hello World!')
	})
})

describe('Boook routes', () => {
	it('should create a new book', async () => {
    const res = await request
      .post('/api/v1/add-book')
      .send({
        title: 'this is cool book',
        author: 'written by cool author',
        done: true,
      })

		const body = res.body
		const message = body.message
    expect(res.statusCode).toEqual(201)
		expect(body).toHaveProperty('message')
    expect(body).toHaveProperty('book')
    expect(body).toHaveProperty('books')
		expect(message).toBe('Book added')
	})

	it('should update an existing book', async () => {
		const id = '64464124ea8733fe23331a82'
    const res = await request
      .put(`/api/v1/edit-book/${id}`)
      .send({
        title: 'this is cool book',
        author: 'written by cool author',
        done: true,
      })
		const body = res.body
		const message = body.message
    expect(res.statusCode).toEqual(200)
		expect(body).toHaveProperty('message')
    expect(body).toHaveProperty('book')
    expect(body).toHaveProperty('books')
		expect(message).toBe('Book updated')
	})

	it('should delete an existing book', async () => {
		const id = '64464124ea8733fe23331a82'
    const res = await request
      .delete(`/api/v1/delete-book/${id}`)
      .send()
		const body = res.body
		const message = body.message
    expect(res.statusCode).toEqual(200)
		expect(body).toHaveProperty('message')
    expect(body).toHaveProperty('book')
    expect(body).toHaveProperty('books')
		expect(message).toBe('Book deleted')
	})

	it('should fetch an existing books', async () => {
    const res = await request
      .get(`/api/v1/books`)
      .send()
		const body = res.body
		const message = body.message
    expect(res.statusCode).toEqual(200)
    expect(body).toHaveProperty('books')
	})
})

describe('Comment routes', () => {

	it('should add a new comment', async () => {
    const res = await request
      .post('/api/v1/add-comment')
      .send({
        remark: 'this is cool comment',
				bookId: '64464124ea8733fe23331a82',
      })

		const body = res.body
		const message = body.message
    expect(res.statusCode).toEqual(201)
		expect(body).toHaveProperty('message')
    expect(body).toHaveProperty('comment')
    expect(body).toHaveProperty('comments')
		expect(message).toBe('Comment added')
	})

	it('should delete an existing comment', async () => {
		const id = '64464124ea8733fe23331a82'
    const res = await request
      .delete(`/api/v1/delete-comment/${id}`)
      .send()
		const body = res.body
		const message = body.message
    expect(res.statusCode).toEqual(200)
		expect(body).toHaveProperty('message')
    expect(body).toHaveProperty('comment')
    expect(body).toHaveProperty('comments')
		expect(message).toBe('Comment deleted')
	})

	it('should fetch an existing comments', async () => {
    const res = await request
      .get(`/api/v1/comments`)
      .send()
		const body = res.body
		const message = body.message
    expect(res.statusCode).toEqual(200)
    expect(body).toHaveProperty('comments')
	})
})