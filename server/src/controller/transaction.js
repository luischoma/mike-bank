import {
  byUserId,
  create,
} from '../model/transaction.js'

import {
  parseTransaction,
} from './utils/transaction-parser.js'

export const transactionController = {
  getTransactionsByUserId: (req, res) => {
    byUserId(req.con, req.userId, (error, results) => {
      error
      ? res.status(404).send({error: `Erro ao buscar transação no banco: ${error}`})
      : res.status(200).send(results.map((r) => parseTransaction(r)))
    })
  },

  createTransaction: (req, res) => {
    create(req.con, req.body, (error, results) => {
      error
      ? res.status(400).send({error: `Erro ao criar transação: ${error}`})
      : res.status(201).end()
    })
  },
}
