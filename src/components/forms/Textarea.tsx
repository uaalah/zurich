import React, { FC } from 'react'
import { Text } from '../../styles'

interface ITextarea extends React.HTMLProps<HTMLTextAreaElement> {
  label?: string
  name: string
  error?: boolean
}

const Textarea: FC<ITextarea> = ( props:ITextarea ) => {
  const { label, name, error, className, ...rest } = props
  return (
    <>
      {!!label && <label htmlFor={name}> {label} </label> }
      <textarea name={name} className={error ? 'error' : ''} {...rest} ></textarea>
      {error && <Text as="label" htmlFor={name} color="#f00" fontSize="error">{label} es un campo obligatorio</Text>}
    </>
  )
}

export default Textarea