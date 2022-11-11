import { getKrxCorps, getRecommandStocks } from '../../api/stocks'
import { getRecommandStocksAsync, getStocksAsync } from './actions'
import createAsyncThunk from '../../lib/createAsyncThunk';

export const getStocksThunk  = createAsyncThunk(getStocksAsync, getKrxCorps)
export const getRecommandThunk = createAsyncThunk(getRecommandStocksAsync, getRecommandStocks)
