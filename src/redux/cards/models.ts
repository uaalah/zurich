import { ICardProps } from "../../models";
import { ReduxCardTypes } from "./types";

export interface ICardsAction {
  type: ReduxCardTypes.SET_CARDS
  payload: ICardProps[]
}