import paths, { requestGet, requestPost } from './index'

export const getAll = async (postID) => {
  return await requestGet(`${paths.comment.getAll}/${postID}`, true)
}

export const create = async ({ author, text, authorID, postID }) => {
  return await requestPost(`${paths.comment.create}/${postID}`, { author, text, authorID }, true)
}
