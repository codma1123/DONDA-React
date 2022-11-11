import { ActionType } from "typesafe-actions"
import { RecommandStocks, Stocks } from "../../api/stocks"
import { AsyncState } from "../../lib/reducerUtils"
import * as actions from './actions'

console.log(actions)

// 스토어의 상태 타입
export type StocksState = {
  stocks: AsyncState<Stocks, Error>,
  recommandStocks: AsyncState<RecommandStocks, Error>
}

// 스토어 액션 타입
export type StocksAction = ActionType<typeof actions>