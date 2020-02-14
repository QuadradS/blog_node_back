import paths, { requestPost } from './index'

export const  singIn = async ({ login, password }) => {
  return await requestPost(paths.auth.signIn, { login, password }, false)
}

export const singUp = ({ login, name, password }) => {
  return requestPost(paths.auth.signUp, { login, name, password }, false)
}

export const checkToken = () => {
  return requestPost(paths.auth.checkToken, {}, true)
}

