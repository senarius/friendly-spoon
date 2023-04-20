import { Document } from 'mongoose'

export interface IComment extends Document {
  remark: string
  bookId: string
}