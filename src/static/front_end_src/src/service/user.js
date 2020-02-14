import paths, { requestGet, requestPost } from './index'

export const getUser = async () => {
  return await requestGet(paths.user.getUser, true)
}
