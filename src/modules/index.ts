import { combineReducers } from "redux";
import stocks from './stocks'

const rootReducer = combineReducers({
  stocks
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>