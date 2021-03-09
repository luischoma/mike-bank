import {
  create,
  getById,
} from '../model/user.js'

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
}
