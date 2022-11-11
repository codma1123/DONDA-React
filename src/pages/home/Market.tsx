import styled from "styled-components"
import MarketTemplate from "../templates/MarketTemplate"

const MarketTitle = styled.div`
  display: flex;
  padding-top: 10px;
  justify-content: space-around;
  font-size: 14px;
  letter-spacing: 2px;
  opacity: .7;
  gap: 10px;
`

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
      <MarketTitle>

        <MarketContentArea>
          <div>한국시장</div>
          <MarketContent></MarketContent>
        </MarketContentArea>

        <MarketContentArea>            
          <div>미국시장</div>
          <MarketContent></MarketContent>

        </MarketContentArea>

      </MarketTitle>     

    </MarketTemplate>   
  )
}

export default Market