import axios from 'axios'

const domain = 'http://localhost:5000'
const api = 'api'
const url = `${domain}/${api}`

export const authTokenName = 'AUTH_TOKEN'
export const getToken = () => localStorage.getItem(authTokenName)

const paths = {
  auth: {
    signIn: `${url}/auth/signin`,
    signUp: `${url}/auth/signup`,
    checkToken: `${url}/auth/checkToken`
  },
  user: {
    getUser: `${url}/user`
  },
  post: {
    getAll: `${url}/post/getAll`,
    getOne: `${url}/post/getOne`,
    getByUserID: `${url}/post/getById`,
    create: `${url}/post/create`
  },
  comment: {
    getAll: `${url}/comment/getByPostId`,
    create: `${url}/comment/create`
  }
}

export const requestGet = (url, isPrivate, headers = {}) => {
  return axios.get(url, {
    headers: {
      authorization: isPrivate ? getToken() : null,
      ...headers
    }
  })
}

export const requestPost = (url, params, isPrivate, headers = {}) => {
  return axios.post(url, params, {
    headers: {
      authorization: isPrivate ? getToken() : null,
      ...headers
    }
  })
}

export default paths

