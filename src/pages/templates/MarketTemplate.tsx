import React from "react";
import styled from "styled-components";

type TemplateProps = {
  children: React.ReactNode
}

const MarketTemplateBlock = styled.button`
  width: 90%;
  height: 200px;
  background: white;
  border-radius: 20px;
  margin-top: 80px;
  outline: none;
  border: none;
  display: flex;
  flex-direction: column;
    
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.0);

  margin-left: auto;
  margin-right: auto;

  &:hover {
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  }

  transition: all .5s ease-in-out;

  &:focus {
    height: 750px;
  }
  
  overflow: hidden;

`

const MarketTemplate = ({ children }: TemplateProps) => {

  const onClick = () => {
    console.log('클릭')
  }

  return (
    <MarketTemplateBlock onClick={onClick}>
      {children}
    </MarketTemplateBlock>
  )
}

export default MarketTemplate