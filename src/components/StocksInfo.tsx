import { Stocks } from '../api/stocks'
import Stock from './Stock'

type StockInfoProps = {
  stocks: Stocks | null
}

const StockInfo = ({ stocks }: StockInfoProps) => {  
  if (!stocks) return <div>loading</div>

  const computedStocks = Object.entries(stocks).map(stock => ({
    code: stock[0],
    title: stock[1]
  }))

  return (
    <div>
      {computedStocks.map(stock => <Stock key={stock.code} stock={stock} />)}
    </div>
  )
}

export default StockInfo