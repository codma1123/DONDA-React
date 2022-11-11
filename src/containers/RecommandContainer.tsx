import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Recommand from "../components/Recommand"
import { RootState } from "../modules"
import { getRecommandThunk } from "../modules/stocks"


const RecommandContainer = () => {
  const { data, loading, error } = useSelector((state: RootState) => state.stocks.recommandStocks)
  const dispatch = useDispatch<any>()

  useEffect(() => {
    if(data) return 

    dispatch(getRecommandThunk())    
  }, [dispatch])

  if (loading) return <div>로딩중</div>
  if (error) return <div>에러!</div>

  return (
    <Recommand recommandStocks={data}/>
  )
}

export default RecommandContainer