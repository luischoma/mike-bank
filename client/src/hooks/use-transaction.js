import useAxios from 'axios-hooks'

export const useTransaction = () => {
  const [
    {data, error},
    executePost
  ] = useAxios(
    {
      url: '/transaction/',
      method: 'POST'
    },
    { manual: true}
  )

  return {
    data,
    error,
    executePost
  }
}