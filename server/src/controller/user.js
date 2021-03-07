import { getAll } from '../model/user.js'

export const userController = {
  getAllUsers: (req, res) => {
    getAll(req.con, (error, results) => {
      if (error) console.log('Erro ao fazer query ao banco')
      console.log('getAllUsers ', results)

      req.con.end()
    })
  },
}
