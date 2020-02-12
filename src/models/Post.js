import { model, Schema } from 'mongoose'

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  text: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
})

export const postModel = model('post', postSchema)
