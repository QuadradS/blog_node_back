import paths, { requestGet, requestPost } from './index'

export const getAll = async () => {
  return await requestGet(paths.post.getAll, true)
}

export const getOne = async (postID) => {
  return await requestGet(`${paths.post.getOne}/${postID}`, true)
}

export const create = async (formData) => {
  return await requestPost(paths.post.create, formData, true, {'Content-Type': 'multipart/form-data'})
}


