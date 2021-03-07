import mysql from 'mysql'
import { DATABASE_CONFIG } from './config.js'

export const databaseClient = () => {
  const connection = mysql.createConnection(DATABASE_CONFIG)

  connection.connect((err) => {
    if (err) console.log('Erro ao conectar no banco: ', err)
  })

  return connection
}
