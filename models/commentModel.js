import mongoose from 'mongoose'

const commentSchema = mongoose.Schema({
  email: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  Blog: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Blog',
  },
})

const Comment = mongoose.model('Comment', commentSchema)
export default Comment
