import sql from 'sql-query'

const sqlQuery = sql.Query()

export const byUserId = (connection, userId, callback) => {
  const sqlSelect = sqlQuery.select()

  const selectQuery = sqlSelect.from('transaction').where(
    {
      author: userId,
    },
  ).build()

  connection.query(selectQuery, callback)
}

export const create = (connection, body, callback) => {
  const sqlInsert = sqlQuery.insert()
  const {
    kind,
    author,
    amount
  } = body || {}

  const insertQuery = sqlInsert.into('transaction').set({
    kind,
    author,
    amount,
  }).build()

  connection.query(insertQuery, callback)
}
