import { DATA_STATUSES } from '../../utils'
import * as userConstants from './constants'

const userState = {
  user: null,
  userStatus: DATA_STATUSES.UN_TOUCHED
}

export default function user(state = userState, action) {
  switch (action.type) {
    // get user
    case userConstants.GET_USER_START:
      return {
        ...state,
        userStatus: DATA_STATUSES.REQUESTING
      }
    case userConstants.GET_USER_SUCCESS:
      return {
        ...state,
        userStatus: DATA_STATUSES.SUCCESS,
        user: action.data
      }
    case userConstants.GET_USER_ERROR:
      return {
        ...state,
        userStatus: DATA_STATUSES.ERROR
      }
    default:
      return state
  }
}
