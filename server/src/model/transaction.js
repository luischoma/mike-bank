import sql from 'sql-query'

const sqlQuery = sql.Query()

export const byUserId = (connection, params, callback) => {
  const sqlSelect = sqlQuery.select()

  const selectQuery = sqlSelect.from('transaction').where(
    {
      author: params.id,
    },
  ).build()

  connection.query(selectQuery, callback)
}

export const create = (connection, body, callback) => {
  const sqlInsert = sqlQuery.insert()
  const {
    id,
    kind,
    author,
    amount,
    date,
  } = body || {}

  const insertQuery = sqlInsert.into('transaction').set({
    id,
    kind,
    author,
    amount,
    date,
  }).build()

  connection.query(insertQuery, callback)
}
