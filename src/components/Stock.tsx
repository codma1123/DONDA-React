type StockProps = {
  stock: {
    code: string,
    title: string
  }
}

const Stock = ({ stock }: StockProps ) => {
  const { code, title } = stock
  return (
    <div>
      {code}: {title}
    </div>
  )
}

export default Stock