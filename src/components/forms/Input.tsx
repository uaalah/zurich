import React, { FC } from 'react'
import { Text } from '../../styles'

interface IInput extends React.HTMLProps<HTMLInputElement> {
  label?: string
  name: string
  error?: boolean
}

const Input: FC<IInput> = ( props:IInput ) => {
  const { label, name, error, className, ...rest } = props
  return (
    <>
      {!!label && <label htmlFor={name}> {label} </label> }
      <input name={name} className={error ? 'error' : ''} {...rest} />
      {error && <Text as="label" htmlFor={name} color="#f00" fontSize="error">{label} es un campo obligatorio</Text>}
    </>
  )
}

export default Input