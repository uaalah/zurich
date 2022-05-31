import { FC, useEffect, useReducer, useState } from "react";
import { useSelector } from 'react-redux';
import { ICardProps, IState } from "../models";
import { saveState } from "../services";
import { Box, ButtonDisplay, Text } from "../styles";
import Card from "./Card";
import SortBySelector from "./SortBySelector";

export enum SortReducerTypes {
  DATE_ASC = 'DATE_ASC',
  DATE_DESC = 'DATE_DESC',
  TITLE_ASC = 'TITLE_ASC',
  TITLE_DESC = 'TITLE_DESC'
}
export type SortByTypes = 
  | SortReducerTypes.DATE_ASC
  | SortReducerTypes.DATE_DESC
  | SortReducerTypes.TITLE_ASC
  | SortReducerTypes.TITLE_DESC

interface IDSortActions {
  type: SortReducerTypes;
  payload: ICardProps[]
}
interface ISortState {
  sortedCards: ICardProps[]
}

const CardList:FC = () => {
  const [sortBy, setSortBy] = useState<SortByTypes>(SortReducerTypes.DATE_ASC)
  const currentCards:ICardProps[] = useSelector((state: IState) => state.cards)
  

  
  const initialSortReducer:ICardProps[] = [...currentCards]


  function sortReducer (state: ISortState, action: IDSortActions)  {
    switch (action.type) {
      case SortReducerTypes.DATE_ASC:
        return { sortedCards: action.payload.sort((a:ICardProps, b:ICardProps) => a.date - b.date) }
      case SortReducerTypes.DATE_DESC:
        return { sortedCards: action.payload.sort((a:ICardProps, b:ICardProps) => b.date - a.date) }
      case SortReducerTypes.TITLE_ASC:
        return { 
          sortedCards: action.payload.sort(function(a:ICardProps, b:ICardProps) {
            const aa = a.titulo.toLowerCase()
            const bb = b.titulo.toLowerCase()
            if (aa > bb){
              return 1
            }
            if (aa < bb){
              return -1
            }
            return 0
          }) 
        }
      case SortReducerTypes.TITLE_DESC:
        return { 
          sortedCards: action.payload.sort(function(a:ICardProps, b:ICardProps) {
            const aa = a.titulo.toLowerCase()
            const bb = b.titulo.toLowerCase()
            if (bb > aa){
              return 1
            }
            if (bb < aa){
              return -1
            }
            return 0
          }) 
        }
      default:
        return state
    }
  }

  const [{sortedCards}, dispatch] = useReducer(sortReducer, {sortedCards: initialSortReducer}, () => ({sortedCards: initialSortReducer}))
  

  useEffect(() => {
    saveState('cards', currentCards)
    dispatch({type: sortBy, payload: [...currentCards]})
    console.log('sortBy', sortBy)
  }, [currentCards])
  
  const handlerSortBy = (sort:SortByTypes) => {
    console.log('sort', sort)
    setSortBy(sort)
    dispatch({type: sort, payload: [...currentCards]})
  }

  

  return(
    <Box
        width={{_: "100%", laptop: "1024px"}} 
        mx="auto"
        my="8"
        px="5"
      >
        {currentCards.length === 0 ? (
          <Text className="body" fontWeight={600}>Todavía no se han añadido tarjetas</Text>
        ) : (
          <>
            <Box display="flex" flexDirection={{_: 'column', tablet: 'row'}} justifyContent="space-between" alignItems="center" mb="8">
              <Text as="h2" className="modalHeader" mb={{_: 5, tablet: 0}}>Tarjetas actuales</Text>
              <SortBySelector sortBy={sortBy} action={handlerSortBy} />
            </Box>
            <Box 
              display="flex" 
              flexDirection={{_: 'column', tablet: 'row'}} 
              flexWrap="wrap"
            >
              {sortedCards.map(item => (
                <Box
                  key={item.date}
                  flexBasis={{_:'100%', tablet: '50%', laptop: '33%'}}
                  p={6}
                >
                  <Card {...item} />
                </Box>
              ))}
            </Box>
            <Box bg="#fc0">
              {sortedCards.map(item => <p key={item.date}>{item.titulo} - {item.descripcion}</p>)}
            </Box>
          </>
        )}
    </Box>
  )
}

export default CardList