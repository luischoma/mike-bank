import sql from 'sql-query'

const sqlQuery = sql.Query()
const sqlSelect = sqlQuery.select()
const sqlInsert = sqlQuery.insert()

export const getAll = (connection, callback) => {
  const selectQuery = sqlSelect.from('user').build()

  connection.query(selectQuery, callback)

  connection.end()
}

export const create = (connection, body, callback) => {
  const {
    id,
    name,
    balance,
    password,
  } = body || {}

  const insertQuery = sqlInsert.into('user').set({
    id,
    name,
    balance,
    password,
  }).build()

  connection.query(insertQuery, callback)

  connection.end()
}
