import { useEffect } from 'react'
import useAxios from 'axios-hooks'
import { useHistory } from 'react-router-dom'

export const useRegister = () => {
  const [
    {data, error},
    executePost
  ] = useAxios(
    {
      url: '/user/',
      method: 'POST'
    },
    { manual: true}
  )

  const { push } = useHistory()

  useEffect(() => {
    if (data) {
      push('/')
    }
  }, [data])

  return {
    error,
    executePost
  }
}