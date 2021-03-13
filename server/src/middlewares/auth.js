import jwt from 'jsonwebtoken'
import { promisify } from 'util'

import { JWTConfig } from '../configs/auth.js'

export default async (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    return res.status(401).json({ error: 'Token precisa estar presente' })
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded = await promisify(jwt.verify)(token, JWTConfig.secret)
    req.userId = decoded.id
    next()
  } catch (err) {
    return res.status(400).json({ error: 'Token inválido' })
  }
}