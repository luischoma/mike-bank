import useAxios from 'axios-hooks'

export const usePayment = () => {
  const [
    {data, error},
    executePost
  ] = useAxios(
    {
      url: '/user/',
      method: 'PUT'
    },
    { manual: true}
  )

  return {
    data,
    error,
    executePost
  }
}