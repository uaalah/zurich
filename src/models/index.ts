export interface ICardProps {
  titulo: string
  descripcion: string
  url: string
  date: number
}

export interface IState {
  cards: ICardProps[]
}