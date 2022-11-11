import React, { useRef, MouseEvent, useState } from "react";
import styled, { css } from "styled-components";

type TemplateProps = {
  children: React.ReactNode
}

type MarketTemplateBlockProps = {
  toggle: boolean
}

const MarketTemplateBlock = styled.div<MarketTemplateBlockProps>`
  min-height: ${props => props.toggle ? '500px;': '200px;' };
  width: 90%;
  height: 200px;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;

  background: white;
  border-radius: 20px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.0);
  outline: none;
  border: none;

  display: flex;
  justify-content: space-around;
  cursor: pointer;
  overflow: hidden;
  
  transition: all .5s ease-in-out;  
  

`

const MarketTemplate = ({ children }: TemplateProps) => {

  const marketTemplateRef = useRef<HTMLDivElement  | null>(null)
  const [toggle, setToggle] = useState(false)

  const onClick = () => setToggle(state => !state)

  return (
    <MarketTemplateBlock onClick={onClick} ref={marketTemplateRef} toggle={toggle}>
      {children}
    </MarketTemplateBlock>
  )
}

export default MarketTemplate