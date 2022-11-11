import { createAsyncAction, createStandardAction } from "typesafe-actions"
import { Stocks } from "../../api/stocks"
import { AxiosError } from "axios"


// 액션 프로토타입 정의
export const GET_STOCKS = 'stocks/GET_STOCKS'
export const GET_STOCKS_SUCCESS = 'stocks/GET_STOCKS_SUCCESS'
export const GET_STOCKS_ERROR = 'stocks/GET_STOCKS_ERROR'

// 액션 함수 객체 생성
export const getStocks = createStandardAction(GET_STOCKS)()
export const getStocksSuccess = createStandardAction(GET_STOCKS_SUCCESS)<Stocks>()
export const getStocksError = createStandardAction(GET_STOCKS_ERROR)<AxiosError>()

// 비동기 액션 함수 생성
export const getStocksAsync = createAsyncAction(
  GET_STOCKS,
  GET_STOCKS_SUCCESS,
  GET_STOCKS_ERROR
)<any, Stocks, AxiosError>()
