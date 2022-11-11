import { createReducer } from "typesafe-actions"
import { StocksState, StocksAction, } from "./types"
import { asyncState, transformToArray, createAsyncReducer } from '../../lib/reducerUtils'
import { getStocksAsync, getRecommandStocksAsync } from './actions'


// 스토어 기본 상태 정의
const initialState: StocksState = {
  stocks: asyncState.initial(),
  recommandStocks: asyncState.initial()
}

// 리듀서 정의
const stocks = createReducer<StocksState, any>(initialState)
  .handleAction(
    transformToArray(getRecommandStocksAsync),
    createAsyncReducer(getRecommandStocksAsync, 'recommandStocks'))
  .handleAction(transformToArray(getStocksAsync), createAsyncReducer(getStocksAsync, 'stocks'),)



export default stocks

