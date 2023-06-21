import mongoose from 'mongoose'

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Author',
  },
  co_Author: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: 'Author',
  },
  likes_count: {
    type: Number,
    required: false,
  },
  view_count: {
    type: Number,
    required: false,
  },
})

const Blog = mongoose.model('Blog', blogSchema)
export default Blog
