import { Router } from 'express'
import { getBooks, addBook, updateBook, deleteBook } from '../controllers/books'
import { getComments, addComment, deleteComment } from '../controllers/comments'

const router: Router = Router()

router.get('/books', getBooks)

router.post('/add-book', addBook)

router.put('/edit-book/:id', updateBook)

router.delete('/delete-book/:id', deleteBook)

router.get('/comments', getComments)

router.post('/add-comment', addComment)

router.delete('/delete-comment/:id', deleteComment)

export default router
