import { combineReducers } from 'redux'
import auth from './state/auth/reducer'
import post from './state/post/reducer'
import user from './state/user/reducer'

const createRootReducer = () =>
  combineReducers({
    auth,
    post,
    user
  })


export default createRootReducer
