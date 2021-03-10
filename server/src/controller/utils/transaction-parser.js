import moment from 'moment'

export const parseTransaction = ({
  id,
  kind,
  author,
  amount,
  date,
}) => ({
  id,
  kind,
  author,
  amount,
  date: moment(date).format('YYYY-MM-DD HH:mm:ss'),
})
