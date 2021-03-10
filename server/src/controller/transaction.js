import {
  byUserId,
  create,
} from '../model/transaction.js'

import {
  parseTransaction,
} from './utils/transaction-parser.js'

export const transactionController = {
  getTransactionsByUserId: (req, res) => {
    byUserId(req.con, req.params, (error, results) => {
      if (error) console.log('Erro ao fazer query ao banco')

      res.send(results.map((r) => parseTransaction(r)))
    })
  },

  createTransaction: (req, res) => {
    create(req.con, req.body, (error, results) => {
      if (error) console.log('Erro ao fazer cadastro no banco ', error)
    })

    res.end()
  },
}
