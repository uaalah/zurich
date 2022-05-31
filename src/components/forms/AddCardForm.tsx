import React, { ChangeEvent, FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCards } from '../../redux/cards/actions';
import { ICardProps, IState } from '../../models';
import { ButtonDisplay, FormRow, Text } from '../../styles';
import Input from './Input';
import Textarea from './Textarea';

interface IAddCardForm {
  closeAction: ()=> void
}

interface IFormValidation {
  [x: string]: boolean;
}

const AddCardForm: FC<IAddCardForm> = ({ closeAction }) => {

  const [update, setUpdate] = useState<boolean>(false)
  const [formState, setFormState] = useState<ICardProps>({
    titulo: '',
    descripcion: '',
    url: '',
    date: 0
  })
  const [error, setError] = useState<IFormValidation>({
    titulo: true,
    descripcion: true,
    url: true,
    date: false
  })
  const { titulo, descripcion, url } = formState
  
  const currentStack:ICardProps[] = useSelector((state: IState) => state.cards)
  const dispatch = useDispatch()
  
  const handleInputChange = ( event: ChangeEvent<HTMLInputElement> ) => {
    const target = event.target as HTMLInputElement
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
    if (target.value.trim() !== '') {
      setError({
        ...error,
        [target.name]: false
      })
    }

  };
  const handleTextAreaChange = ( event: ChangeEvent<HTMLTextAreaElement> ) => {
    const target = event.target as HTMLTextAreaElement
    setFormState({
      ...formState,
      [target.name]: target.value.trim(),
    });
    if (target.value.trim() !== '') {
      setError({
        ...error,
        [target.name]: false
      })
    }
  };
  const handlerSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setUpdate(true)
    const checkValid = Object.values(error).includes(true)
    if (!checkValid) {
      const fecha:Date = new Date()
      const date:number = fecha.getTime()
      const newCard = {...formState, date: date}
      const newStack:ICardProps[] = [...currentStack, newCard]
      dispatch(setCards(newStack))
      closeAction()
    }
  }

  return(
    <form onSubmit={handlerSubmit}>
      <FormRow>
        <Input 
          type='text' 
          label='Título*'  
          name='titulo' 
          value={titulo}
          onChange={handleInputChange}
          error={error.titulo && update}
        />
      </FormRow>
      <FormRow>
        <Textarea 
          label='Descripción*' 
          name='descripcion' 
          value={descripcion}
          onChange={handleTextAreaChange}
          error={error.descripcion && update}
        />
      </FormRow>
      <FormRow>
        <Input 
          type='text' 
          label='URL*' 
          name='url' 
          value={url}
          onChange={handleInputChange}
          error={error.url && update}
        />
      </FormRow>
      <FormRow>
        <ButtonDisplay
          width="100%"
          height="3rem"
          borderRadius="m"
        >
          <Text className="modalHeader" as="span">Añadir</Text>
        </ButtonDisplay>
      </FormRow>
    </form>
  )
}

export default AddCardForm