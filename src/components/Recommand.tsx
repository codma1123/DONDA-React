import { useCallback, useEffect, MouseEvent } from "react"
import styled from "styled-components"
import { RecommandStocks } from "../api/stocks"
import RecommandTemplate from '../pages/templates/RecommandTemplate'

type RecommandProps = {
  recommandStocks: RecommandStocks | null
}

type RecommendStock = {
  code: string
  title: string
  close: number
  changes_ratio: number
}

const RecommandBlock = styled.div`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;  
  width: 100%;
  height: 100px;

  background: white;
  outline: none;
  border: none;  
  border-radius: 20px;
    
  transition: all .2s ease-in-out;

  cursor: pointer;

  & + & {
    margin-top: 20px;    
  }

  &:hover {
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  }

  &:last-child {
    margin-bottom: 20px;
  }
`

const Recommand = ({ recommandStocks }: RecommandProps) => {

  if (!recommandStocks) return <div>loading</div>

  const computedRecommandStocks: RecommendStock[] = Object.entries(recommandStocks).map(stock => ({
    code: stock[0],
    title: stock[1].name,
    close: stock[1].close,
    changes_ratio: stock[1].changes_ratio,    
  }))

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    console.log(e)
  }

  return (
    <RecommandTemplate> 
      {computedRecommandStocks.map(stock => 
        <RecommandBlock key={stock.code} onClick={onClick}>
          {stock.title}
        </RecommandBlock>
       )}    
    </RecommandTemplate>
  )
}

export default Recommand