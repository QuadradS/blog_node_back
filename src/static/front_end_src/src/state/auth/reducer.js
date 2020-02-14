import { DATA_STATUSES } from '../../utils'
import * as authConstants from './constants'

const authState = {
  isAuth: false,
  authStatus: DATA_STATUSES.UN_TOUCHED,
  checkTokenStatus: DATA_STATUSES.UN_TOUCHED,
  signUpStatus: DATA_STATUSES.UN_TOUCHED
}

export default function auth(state = authState, action) {
  switch (action.type) {
    // login
    case authConstants.AUTH_SIGN_IN_START:
      return {
        ...state,
        authStatus: DATA_STATUSES.REQUESTING
      }
    case authConstants.AUTH_SIGN_IN_SUCCESS:
      return {
        ...state,
        authStatus: DATA_STATUSES.SUCCESS,
        checkTokenStatus: DATA_STATUSES.SUCCESS,
        isAuth: true
      }
    case authConstants.AUTH_SIGN_IN_ERROR:
      return {
        ...state,
        isAuth: false,
        authStatus: DATA_STATUSES.ERROR
      }
    //check token
    case authConstants.CHECK_TOKEN_START:
      return {
        ...state,
        checkTokenStatus: DATA_STATUSES.REQUESTING
      }
    case authConstants.CHECK_TOKEN_SUCCESS:
      return {
        ...state,
        checkTokenStatus: DATA_STATUSES.SUCCESS,
        isAuth: true
      }
    case authConstants.CHECK_TOKEN_ERROR:
      return {
        ...state,
        isAuth: false,
        checkTokenStatus: DATA_STATUSES.ERROR
      }
    // login
    case authConstants.AUTH_SIGN_UP_START:
      return {
        ...state,
        signUpStatus: DATA_STATUSES.REQUESTING
      }
    case authConstants.AUTH_SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpStatus: DATA_STATUSES.SUCCESS,
      }
    case authConstants.AUTH_SIGN_UP_ERROR:
      return {
        ...state,
        isAuth: false,
        signUpStatus: DATA_STATUSES.ERROR
      }
    case authConstants.AUTH_SIGN_UP_CLEAR:
      return {
        ...state,
        isAuth: false,
        signUpStatus: DATA_STATUSES.UN_TOUCHED
      }
    default:
      return state
  }
}
