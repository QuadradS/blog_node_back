import { DATA_STATUSES } from '../../utils'
import * as postConstants from './constants'

const postState = {
  posts: null,
  postsStatus: DATA_STATUSES.UN_TOUCHED,
  selectedPost: null,
  selectedPostStatus: DATA_STATUSES.UN_TOUCHED,
  createPostStatus: DATA_STATUSES.UN_TOUCHED,
  getCommentsStatus: DATA_STATUSES.UN_TOUCHED,
  createCommentsStatus: DATA_STATUSES.UN_TOUCHED,
}

export default function post(state = postState, action) {
  switch (action.type) {
    // get all
    case postConstants.GET_ALL_START:
      return {
        ...state,
        postsStatus: DATA_STATUSES.REQUESTING
      }
    case postConstants.GET_ALL_SUCCESS:
      return {
        ...state,
        postsStatus: DATA_STATUSES.SUCCESS,
        posts: action.data
      }
    case postConstants.GET_ALL_ERROR:
      return {
        ...state,
        postsStatus: DATA_STATUSES.ERROR
      }
    // get one
    case postConstants.GET_ONE_START:
      return {
        ...state,
        selectedPostStatus: DATA_STATUSES.REQUESTING
      }
    case postConstants.GET_ONE_SUCCESS:
      return {
        ...state,
        selectedPostStatus: DATA_STATUSES.SUCCESS,
        selectedPost: action.data
      }
    case postConstants.GET_ONE_ERROR:
      return {
        ...state,
        selectedPostStatus: DATA_STATUSES.ERROR
      }
    case postConstants.CLEAR_POST:
      return {
        ...state,
        selectedPostStatus: DATA_STATUSES.UN_TOUCHED,
        getCommentsStatus: DATA_STATUSES.UN_TOUCHED,
        createCommentsStatus: DATA_STATUSES.UN_TOUCHED,
        selectedPost: null
      }
    // create
    case postConstants.CREATE_POST_START:
      return {
        ...state,
        createPostStatus: DATA_STATUSES.REQUESTING
      }
    case postConstants.CREATE_POST_SUCCESS:
      return {
        ...state,
        createPostStatus: DATA_STATUSES.SUCCESS
      }
    case postConstants.CREATE_POST_ERROR:
      return {
        ...state,
        createPostStatus: DATA_STATUSES.ERROR
      }
    case postConstants.CREATE_POST_CLEAR:
      return {
        ...state,
        createPostStatus: DATA_STATUSES.UN_TOUCHED,
        selectedPost: null
      }
    // get comments
    case postConstants.GET_COMMENTS_START:
      return {
        ...state,
        getCommentsStatus: DATA_STATUSES.REQUESTING
      }
    case postConstants.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        getCommentsStatus: DATA_STATUSES.SUCCESS,
        selectedPost: { ...state.selectedPost, comments: action.data }
      }
    case postConstants.GET_COMMENTS_ERROR:
      return {
        ...state,
        getCommentsStatus: DATA_STATUSES.ERROR
      }
    // create comments
    case postConstants.CREATE_COMMENT_START:
      return {
        ...state,
        createCommentsStatus: DATA_STATUSES.REQUESTING
      }
    case postConstants.CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        createCommentsStatus: DATA_STATUSES.SUCCESS,
        selectedPost: { ...state.selectedPost, comments: [...state.selectedPost.comments, action.data] }
      }
    default:
      return state
  }
}
