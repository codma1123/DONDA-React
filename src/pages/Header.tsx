import { ChangeEvent, FormEvent, useState } from "react"
import styled from "styled-components"
import { darken, lighten } from 'polished';
import HeaderTemplate from "./templates/HeaderTemplate"

import { GoBell } from 'react-icons/go'
import { AiOutlineOrderedList } from 'react-icons/ai'
import { BsFillBookmarkDashFill } from 'react-icons/bs'
import { Link } from "react-router-dom"


const SearchBar = styled.div`
  height: 30px;
  margin-left: 25px;
  font-size: 25px;

  background: white;
  border-radius: 10px;

  position: block;
  flex-grow: 1;
`

const Form = styled.form`
  height: 20px;

  border-radius: 10px;
  border-top: 1px solid #e9ecef;

  display: flex;
  align-items: center;
  justify-content: center;      
`

const Input = styled.input`  
  width: 90%;
  margin-top: 5px;

  color: #8d8d8d;
  outline: none;
  border: none;
  
  caret-color: #c7c7c7;
`

const IconButton = styled.button`
  margin-right: 5px;
  padding-top: 10px;
  font-size: 23px;

  color: gray;    
  background: none;
  cursor: pointer;
  border: none;

  traisition: all .2s ease-in-out;

  &:hover {
    color: ${lighten(0.3, '#808080')};
  }  
`

const Header = () => {

  const [value, setValue] = useState('')

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setValue('')
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <HeaderTemplate>
      <SearchBar>
        <Form onSubmit={onSubmit}>
          <Input onChange={onChange} value={value}/>
        </Form>
      </SearchBar>      
    
      <IconButton>
        <AiOutlineOrderedList />
      </IconButton>

      <Link to="/detail">
        <IconButton>
          <BsFillBookmarkDashFill />
        </IconButton>
      </Link>      
        
      <Link to="/">
        <IconButton>
          <GoBell />
        </IconButton>
      </Link>
      
    </HeaderTemplate>
  )
}

export default Header