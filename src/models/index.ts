export interface ICardProps {
  titulo: string
  descripcion: string
  url: string
}

export interface IState {
  cards: ICardProps[]
}