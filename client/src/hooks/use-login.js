import { useEffect } from 'react'
import useAxios from 'axios-hooks'
import { useHistory } from 'react-router-dom'

export const useLogin = () => {
  const [
    {data, error},
    executePost
  ] = useAxios(
    {
      url: '/user/login',
      method: 'POST'
    },
    { manual: true}
  )

  const { push }= useHistory()

  useEffect(() => {
    if (data) {
      window.sessionStorage.setItem('mikeBankToken', data.token)

      push('/payment')
    }
  }, [data])

  return {
    error,
    executePost
  }
}