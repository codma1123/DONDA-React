import { useSelector, useDispatch } from 'react-redux'
import { RootState} from '../modules'
import { useEffect } from 'react'
import { getStocksThunk } from '../modules/stocks'
import StocksInfo from '../components/StocksInfo'
import { Stocks } from '../api/stocks'

const StocksInfoContainer = () => {

  const { data, loading, error } = useSelector((state: RootState) => state.stocks.stocks)
  const dispatch = useDispatch<any>()

  useEffect(() => {
    if(data) {
      console.log('데이터 존재')
    }

    dispatch(getStocksThunk())
  }, [dispatch])
  
  if (loading) return <div>로딩중</div>
  if (error) return <div>에러</div>
  
  return (
    <StocksInfo stocks={data as Stocks}/>
  )
}

export default StocksInfoContainer