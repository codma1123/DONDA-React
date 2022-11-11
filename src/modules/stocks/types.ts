import { ActionType } from "typesafe-actions"
import { Stocks } from "../../api/stocks"
import { AsyncState } from "../../lib/reducerUtils"
import * as actions from './actions'

// 스토어의 상태 타입
export type StocksState = {
  stocks: AsyncState<Stocks, Error>
}

// 스토어 액션 타입
export type StocksAction = ActionType<typeof actions>