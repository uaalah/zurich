import { IState } from "../../models";
import { ICardsAction } from "./models";
import defaultState from "./state";
import { ReduxCardTypes } from "./types";


export default function cardsReducer(state: IState = defaultState, action: ICardsAction) {
  switch (action.type) {
    case ReduxCardTypes.SET_CARDS:
      console.log(state)
      return { ...state, cards: action.payload}
    default:
      return state
  }
}