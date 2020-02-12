import jwt from 'jsonwebtoken'
import config from '../config'
import { getUSerByToken } from '../services/userService'

export default async (req, res, next) => {
  const token = req.headers['authorization']
  if (!token) {
    return res.status(403).json({message: 'Forbidden. No token'})
  }

  try {
    req.token = await jwt.verify(token, config.secret)
    req.user = await getUSerByToken(req.token)
  } catch ({ message }) {
    return res.status(400).json({message})
  }

  return next()
}
