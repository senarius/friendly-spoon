const mockingoose = require('mockingoose')
import Book from '../book'
import { IBook } from '../../types/book'

describe('Book model', () => {
  describe('fetchBooks', () => {
    it ('should return the list of books', async () => {
      mockingoose(Book).toReturn([
        {
					_id: '111',
          title: 'Book 1',
          author: 'Author 1',
          done: true,
        },
        { 
					_id: '222',
          title: 'Book 2',
          author: 'Author 2',
          year: false,
        }
      ], 'find')
      const results = await Book.find()
      expect(results[0].title).toBe('Book 1')
      expect(results.length).toBe(2)
    })
  })

	describe('addBook', () => {
    it ('should return saved book', async () => {
			const book: IBook = new Book({
				title: 'Book 1',
				author: 'Author 1',
				done: true,
			})

      mockingoose(Book).toReturn(
        {
					_id: '1',
          title: book.title,
          author: book.author,
          done: book.done,
          createAt: new Date(),
          updatedAt: new Date(),
        }, 'save')
      const result = await book.save()
      expect(result.title).toBe('Book 1')
    })
  })
})