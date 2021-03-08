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
  console.log('patiooo ', body)
  // connection.query('SELECT * FROM user', callback)
}
