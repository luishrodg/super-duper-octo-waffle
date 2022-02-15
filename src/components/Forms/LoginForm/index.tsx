import { Button, Input } from '@geist-ui/core'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as S from './styles'

const LoginForm = () => {
  const { register, handleSubmit } = useForm()
  const [loading, setLoading] = useState(false)

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))

  const onSubmit = async (data: any) => {
    setLoading(true)
    await delay(5000)
    console.log(data)
    setLoading(false)
  }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <Input width="100%" {...register('email')} />
      <Input.Password width="100%" {...register('password')} />

      <Button
        type="secondary-light"
        htmlType="submit"
        width="100%"
        loading={loading}
      >
        Login
      </Button>
    </S.Form>
  )
}

export default LoginForm
