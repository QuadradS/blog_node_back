import * as authConstants from './constants'
import * as authService from '../../service/auth'
import { authTokenName } from '../../service'

// login
const authSignInStart = () => ({
  type: authConstants.AUTH_SIGN_IN_START
})
const authSignInSuccess = (data) => ({
  type: authConstants.AUTH_SIGN_IN_SUCCESS,
  data
})
const authSignInError = (error) => ({
  type: authConstants.AUTH_SIGN_IN_ERROR,
  error
})
export const authSignIn = ({ login, password }) => (dispatch) => {
  dispatch(authSignInStart())
  authService.singIn({ login, password })
             .then((res) => {
               localStorage.setItem(authTokenName, res.data.token)
               dispatch(authSignInSuccess(res.data))
             })
             .catch((err) => {
               localStorage.clear()
               dispatch(authSignInError(err))
             })
}


// check token
const checkTokenStart = () => ({
  type: authConstants.CHECK_TOKEN_START
})
const checkTokenSuccess = (data) => ({
  type: authConstants.CHECK_TOKEN_SUCCESS,
  data
})
const checkTokenError = (error) => ({
  type: authConstants.CHECK_TOKEN_ERROR,
  error
})
export const checkToken = () => (dispatch) => {
  dispatch(checkTokenStart())
  authService.checkToken()
             .then((res) => dispatch(checkTokenSuccess(res.data)))
             .catch((err) => {
               localStorage.clear()
               dispatch(checkTokenError(err))
             })
}

// register
const authSignUpStart = () => ({
  type: authConstants.AUTH_SIGN_UP_START
})
const authSignUpSuccess = (data) => ({
  type: authConstants.AUTH_SIGN_UP_SUCCESS,
  data
})
const authSignUpError = (error) => ({
  type: authConstants.AUTH_SIGN_UP_ERROR,
  error
})
export const authSignUpClear = () => ({
  type: authConstants.AUTH_SIGN_UP_CLEAR
})
export const authSignUp = ({ login, password, name }) => (dispatch) => {
  dispatch(authSignUpStart())
  authService.singUp({ login, password, name })
             .then((res) => dispatch(authSignUpSuccess(res.data)))
             .catch((err) => dispatch(authSignUpError(err)))
}

