import md5 from 'md5'
import jwt from 'jsonwebtoken'

import { JWTConfig } from '../configs/auth.js'

import {
  create,
  getById,
  authenticate,
} from '../model/user.js'

export const userController = {
  createUser: (req, res) => {
    create(req.con, req.body, (error, results) => {
      error
      ? res.status(400).send({error: `Erro ao criar usuário no banco: ${error}`})
      : res.status(201).send({status: 'Success'})
    })
  },

  getUserById: (req, res) => {
    getById(req.con, req.userId, (error, results) => {
      error
      ? res.status(404).send({error: `Erro ao buscar usuário no banco: ${error}`})
      : res.status(200).send(results)
    })
  },

  authenticateUser: (req, res) => {
    authenticate(req.con, req.body, (error, results) => {
      if (error) console.log('Erro ao consultar banco ', error)

      if (results.length > 0) {
        if(results[0].password === md5(req.body.password)) {
          res.status(200).send({
            status: 'Authenticated',
            token: jwt.sign({
              id: results[0].id
            }, JWTConfig.secret,{expiresIn: JWTConfig.expiresIn})
          })
        }
      } else {
        res.status(401).send({
        status: 'Unauthenticated',
      })}
    })
  },
}
