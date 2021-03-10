import sql from 'sql-query'
import md5 from 'md5'

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
    password: md5(password),
  }).build()

  connection.query(insertQuery, callback)
}

export const authenticate = (connection, body, callback) => {
  const sqlSelect = sqlQuery.select()

  const selectQuery = sqlSelect.from('user')
    .select('password')
    .where(
      {
        name: body.name,
      },
    ).build()

  connection.query(selectQuery, callback)
}
