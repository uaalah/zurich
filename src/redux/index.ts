import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { IState } from '../models';
import { loadState } from '../services';
import cardsReducer from './cards/reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}


/*const RootReducer = combineReducers({
  cards: cardsReducer,
})*/

const initialState: IState = loadState()


// const zurichStore = configureStore({
//   reducer: RootReducer
// })

const zurichStore = createStore(
  cardsReducer,
  initialState,
  composeWithDevTools()
)

export default zurichStore