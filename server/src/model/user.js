export const getAll = (connection, callback) => {
  connection.query('SELECT * FROM user', callback)
}

export const create = (connection, body, callback) => {
  console.log('patiooo ', body)
  // connection.query('SELECT * FROM user', callback)
}
