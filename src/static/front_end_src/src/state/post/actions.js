import * as postConstants from './constants'
import * as postService from '../../service/post'
import * as commentsService from '../../service/comments'

// get all
const getAllStart = () => ({
  type: postConstants.GET_ALL_START
})
const getAllSuccess = (data) => ({
  type: postConstants.GET_ALL_SUCCESS,
  data
})
const getAllError = (error) => ({
  type: postConstants.GET_ALL_ERROR,
  error
})
export const getAll = () => (dispatch) => {
  dispatch(getAllStart())
  postService.getAll()
             .then((res) => dispatch(getAllSuccess(res.data)))
             .catch((err) => dispatch(getAllError(err)))
}

// get one
const getOneStart = () => ({
  type: postConstants.GET_ONE_START
})
const getOneSuccess = (data) => ({
  type: postConstants.GET_ONE_SUCCESS,
  data
})
const getOneError = (error) => ({
  type: postConstants.GET_ONE_ERROR,
  error
})
export const getOne = (postID) => (dispatch) => {
  dispatch(getOneStart())
  postService.getOne(postID)
             .then((res) => dispatch(getOneSuccess(res.data)))
             .catch((err) => dispatch(getOneError(err)))
}

// clear post
export const clearPost = () => ({
  type: postConstants.CLEAR_POST
})

// create post
const createStart = () => ({
  type: postConstants.CREATE_POST_START
})
const createSuccess = (data) => ({
  type: postConstants.CREATE_POST_SUCCESS,
  data
})
const createError = (error) => ({
  type: postConstants.CREATE_POST_ERROR,
  error
})
export const createPostClear = () => ({
  type: postConstants.CREATE_POST_CLEAR
})
export const create = (formData) => (dispatch) => {
  dispatch(createStart())
  postService.create(formData)
             .then((res) => dispatch(createSuccess(res.data)))
             .catch((err) => dispatch(createError(err)))
}

// get comments
const getCommentsStart = () => ({
  type: postConstants.GET_COMMENTS_START
})
const getCommentsSuccess = (data) => ({
  type: postConstants.GET_COMMENTS_SUCCESS,
  data
})
const getCommentsError = (error) => ({
  type: postConstants.GET_COMMENTS_ERROR,
  error
})
export const getComments = (postID) => (dispatch) => {
  dispatch(getCommentsStart())
  commentsService.getAll(postID)
                 .then((res) => dispatch(getCommentsSuccess(res.data)))
                 .catch((err) => dispatch(getCommentsError(err)))
}

// create comment
const createCommentsStart = () => ({
  type: postConstants.CREATE_COMMENT_START
})
const createCommentsSuccess = (data) => ({
  type: postConstants.CREATE_COMMENT_SUCCESS,
  data
})
const createCommentsError = (error) => ({
  type: postConstants.CREATE_COMMENT_ERROR,
  error
})
export const createCommentsClear = (error) => ({
  type: postConstants.CREATE_COMMENT_CLEAR,
})
export const createComment = ({ author, text, authorID, postID }) => (dispatch) => {
  dispatch(createCommentsStart())
  commentsService.create({ author, text, authorID, postID })
                 .then((res) => dispatch(createCommentsSuccess(res.data)))
                 .catch((err) => dispatch(createCommentsError(err)))
}
