import { Stocks } from '../api/stocks'
import Stock from './Stock'

type StockInfoProps = {
  stocks: Stocks
}

const StockInfo = ({ stocks }: StockInfoProps) => {  
  if (!stocks) return <div>stocks</div>

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