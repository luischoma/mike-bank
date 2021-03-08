import { create, getAll } from '../model/user.js'

export const userController = {
  getAllUsers: (req, res) => {
    getAll(req.con, (error, results) => {
      if (error) console.log('Erro ao fazer query ao banco')
      res.send(results)
    })
  },
  createUser: (req, res) => {
    create(req.con, req.body, (error, results) => {
      if (error) console.log('Erro ao fazer cadastro no banco ', error)
    })
    res.end()
  },
}
