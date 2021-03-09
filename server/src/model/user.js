import sql from 'sql-query'

const sqlQuery = sql.Query()

export const getById = (connection, params, callback) => {
  const sqlSelect = sqlQuery.select()

  const selectQuery = sqlSelect.from('user').where(
    {
      id: params.id,
    },
  ).build()

  connection.query(selectQuery, callback)
}

export const create = (connection, body, callback) => {
  const sqlInsert = sqlQuery.insert()
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
}
