const mockingoose = require('mockingoose')
import Comment from '../comment'
import { IComment } from '../../types/comment'

describe('Comment model', () => {
  describe('fetchComments', () => {
    it ('should return the list of comments', async () => {
      mockingoose(Comment).toReturn([
        {
          remark: 'Comment 1',
          bookId: '123'
        },
        {
          remark: 'Comment 2',
          bookId: '123',
        }
      ], 'find')
      const results = await Comment.find()
      expect(results[0].remark).toBe('Comment 1')
      expect(results.length).toBe(2)
    })
  })

	describe('addComment', () => {
    it ('should return saved book', async () => {
			const book: IComment = new Comment({
				remark: 'Comment 1',
				bookId: '123',
			})

      mockingoose(Comment).toReturn(
        {
					_id: '1',
          remark: book.remark,
          bookId: book.bookId,
          createAt: new Date(),
          updatedAt: new Date(),
        }, 'save')
      const result = await book.save()
      expect(result.remark).toBe('Comment 1')
    })
  })
})