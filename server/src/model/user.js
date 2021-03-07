export const getAll = (connection, callback) => {
  connection.query('SELECT * FROM user', callback)
}
