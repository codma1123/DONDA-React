import { ChangeEvent, FormEvent, useState } from "react"
import styled from "styled-components"
import HeaderTemplate from "./templates/HeaderTemplate"

import { GoBell } from 'react-icons/go'
import { AiOutlineOrderedList } from 'react-icons/ai'
import { BsFillBookmarkDashFill } from 'react-icons/bs'

const SearchBar = styled.div`
  background: white;
  height: 30px;
  border-radius: 10px;
  position: block;
  font-size: 25px;
  margin-left: 35px;
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
  outline: none;
  border: none;
  width: 90%;
  margin-top: 5px;
  color: #8d8d8d;
  caret-color: #c7c7c7;
`

const IconButton = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  padding-top: 10px;
  color: gray;
    
  font-size: 25px;
  margin-right: 10px;
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
      
      <IconButton>
       <BsFillBookmarkDashFill />
      </IconButton>

      <IconButton>
        <GoBell />
      </IconButton>
      
    </HeaderTemplate>
  )
}

export default Header