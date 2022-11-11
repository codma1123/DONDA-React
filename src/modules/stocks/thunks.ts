import { AnyAction } from 'redux';
import { getKrxCorps} from '../../api/stocks'
import { getStocksAsync } from './actions'
import createAsyncThunk from '../../lib/createAsyncThunk';

export const getStocksThunk  = createAsyncThunk(getStocksAsync, getKrxCorps)