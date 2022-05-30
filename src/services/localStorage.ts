import { ICardProps, IState } from "../models";
import defaultState from "../redux/cards/state";


export function saveState(objKey: string, objValue: ICardProps[]) {
  let newStatus = loadState()
  newStatus = {
    ...newStatus,
    [objKey]: objValue
  }
  window.localStorage.setItem('zurichCards', JSON.stringify(newStatus))
}

export function loadState(){
  if (window && window.localStorage) {
    const storageStatus = window.localStorage.getItem('zurichCards');
    if (storageStatus) {
      console.log('storageStatus \n', JSON.parse(storageStatus))
      return JSON.parse(storageStatus);
    }
  }
  const reduxDefaultState: IState =  defaultState
  console.log('dashboard default', reduxDefaultState)
  return reduxDefaultState;
}