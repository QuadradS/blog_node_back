import { getUSerByToken } from '../services/userService'

export default async (req, res, next) => {
  try {
    req.user = await getUSerByToken(req.token)
  } catch ({ message }) {
    next({ status: 500, message })
  }
  req.TEST = {test: 'TESTESTTE'}
  next()
}
