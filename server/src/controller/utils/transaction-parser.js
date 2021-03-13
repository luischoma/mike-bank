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
  date: moment(date).format('HH:mm:ss DD-MM-YYYY'),
})
