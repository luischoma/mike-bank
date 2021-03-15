import useAxios from 'axios-hooks'

export const useAccountMovement = () => {
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