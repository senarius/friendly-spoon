import { IComment } from '../types/comment'
import { model, Schema } from 'mongoose'

const commentSchema: Schema = new Schema({
  remark: {
    type: String,
    required: true
  },
  bookId: {
    type: String,
    required: true
  }

}, { timestamps: true })


export default model<IComment>('Comment', commentSchema)