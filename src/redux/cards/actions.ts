import { ICardProps } from "../../models";
import { ReduxCardTypes } from "./types";

export function setCards(cards: ICardProps[]) {
  return{
    type: ReduxCardTypes.SET_CARDS,
    payload: cards
  }
}