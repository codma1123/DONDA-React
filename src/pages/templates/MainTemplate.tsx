import styled, { StyledComponent } from "styled-components"
import React, {} from 'react'

type TemplateProps = {
  children: React.ReactNode
}

const MainTemplateBlock = styled.div`
  width: 390px;
  height: 844px;
  
  background: #fafafa;
  border-radius: 25px;
  box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.05);

  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;

  align-items: center;
  
  display: flex;  
  flex-direction: column;  

  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }

`

const MainTemplate = ({ children }: TemplateProps) => {
  return (
    <MainTemplateBlock>
      {children}
    </MainTemplateBlock>
    
  )
}

export default MainTemplate