import { RecommandStocks } from './../../api/stocks';
import { createAsyncAction, createStandardAction } from "typesafe-actions"
import { Stocks } from "../../api/stocks"
import { AxiosError } from "axios"

type AsyncActionType = [string, string , string]

const createAction = (actionType: string, actionName: string): AsyncActionType => {
  return [
    `${actionType}/${actionName}`,
    `${actionType}/${actionName}_SUCCESS`,
    `${actionType}/${actionName}_ERROR`
  ]
}


// 액션 프로토타입 정의
export const GET_STOCKS: AsyncActionType = createAction('stocks', 'GET_STOCKS')             // 모든 종목 가져오기
export const GET_RECOMMAND: AsyncActionType = createAction('stocks', 'GET_RECOMMAND')       // 추천 종목 가져오기


// 비동기 액션 함수 생성
export const getStocksAsync = createAsyncAction(...GET_STOCKS)<any, Stocks, AxiosError>()
export const getRecommandStocksAsync = createAsyncAction( ...GET_RECOMMAND)<any, RecommandStocks, AxiosError>()



