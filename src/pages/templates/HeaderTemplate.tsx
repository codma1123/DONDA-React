import React from "react";
import styled from "styled-components";

type TemplateProps = {
  children: React.ReactNode
}

const HeaderTemplateBlock = styled.div`
  width: 452px;
  height: 50px;  
  background: #fafafa;  
  position: fixed;
  border-radius: 25px 25px 0px 0px;
  display: flex;
  align-items: center;    
`

const HeaderTemplate = ({ children }: TemplateProps) => {
  return (
    <HeaderTemplateBlock>
      {children}
    </HeaderTemplateBlock>
  )
}

export default HeaderTemplate
