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

export const create = (connection, body, userId, callback) => {
  const sqlInsert = sqlQuery.insert()
  const {
    kind,
    amount
  } = body || {}

  const insertQuery = sqlInsert.into('transaction').set({
    kind,
    author: userId,
    amount,
  }).build()

  // Had to build this query manually due to the lib not supporting update properly
  const updateQuery = `UPDATE user SET balance = balance + ${amount} WHERE id = ${userId};`

  connection.query(insertQuery, () => {console.log('inserting transaction...')})
  connection.query(updateQuery, callback)

}
