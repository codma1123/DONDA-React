import styled from "styled-components"
import MarketTemplate from "../templates/MarketTemplate"


const MarketContentArea = styled.div`
  height: 180px;
  width: 190px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

const MarketContent = styled.div`
  background: #fafafa;
  margin-top: 10px;
  width: 80%;
  height: 80%;
  border-radius: 10px;
`

const Market = () => {
  return (
    <MarketTemplate>

        <MarketContentArea>
          <div>한국시장</div>
          <MarketContent></MarketContent>
        </MarketContentArea>

        <MarketContentArea>            
          <div>미국시장</div>
          <MarketContent></MarketContent>

        </MarketContentArea>


    </MarketTemplate>   
  )
}

export default Market