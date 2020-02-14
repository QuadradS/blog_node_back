// get one
import * as userConstants from './constants'
import * as userService from '../../service/user'

const getUserStart = () => ({
  type: userConstants.GET_USER_START
})
const getUserSuccess = (data) => ({
  type: userConstants.GET_USER_SUCCESS,
  data
})
const getUserError = (error) => ({
  type: userConstants.GET_USER_ERROR,
  error
})
export const getUser = (postID) => (dispatch) => {
  dispatch(getUserStart())
  userService.getUser(postID)
             .then((res) => dispatch(getUserSuccess(res.data)))
             .catch((err) => dispatch(getUserError(err)))
}
