import mongoose from 'mongoose'

const authorSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
})

const Author = mongoose.model('Author', authorSchema)
export default Author
