import { Response, Request } from 'express'
import { IComment } from '../../types/comment'
import Comment from '../../models/comment'

const getComments = async (req: Request, res: Response): Promise<void> => {
  try {
    const comments: IComment[] = await Comment.find()
    res.status(200).json({ comments })
  } catch (error) {
    throw error
  }
}

const addComment = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<IComment, 'remark' | 'bookId'>

    const comment: IComment = new Comment({
      remark: body.remark,
      bookId: body.bookId,
    })

    const newComment: IComment = await comment.save()
    const allComments: IComment[] = await Comment.find()

    res.status(201).json({ message: 'Comment added', comment: newComment, comments: allComments })
  } catch (error) {
    throw error
  }
}

const deleteComment = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedComment: IComment | null = await Comment.findByIdAndRemove(
      req.params.id
    )
    const allComments: IComment[] = await Comment.find()
    res.status(200).json({
      message: 'Comment deleted',
      comment: deletedComment,
      comments: allComments,
    })
  } catch (error) {
    throw error
  }
}

export { getComments, addComment, deleteComment }
