import {
  create,
  getById,
  authenticate,
} from '../model/user.js'

import md5 from 'md5'

export const userController = {
  createUser: (req, res) => {
    create(req.con, req.body, (error, results) => {
      if (error) console.log('Erro ao fazer cadastro no banco ', error)
    })

    res.end()
  },

  getUserById: (req, res) => {
    getById(req.con, req.params, (error, results) => {
      if (error) console.log('Erro ao fazer query ao banco')

      res.send(results)
    })
  },

  authenticateUser: (req, res) => {
    authenticate(req.con, req.body, (error, results) => {
      if (error) console.log('Erro ao consultar banco ', error)

      results[0].password === md5(req.body.password)
        ? res.status(200).send({
            status: 'Authenticated',
          })
        : res.status(401).send({
          status: 'Unauthenticated',
        })
    })
  },
}
