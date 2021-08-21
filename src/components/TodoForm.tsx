import React from "react"
import styled from "styled-components"
import useInputState from "../hooks/useInputState"

const FormWrap = styled.div`
  width: 50%;

  input[type="text"] {
    height: 56px;
    line-height: 1.3;
    font-size: 15px;
    padding: 0 15px;
  }
`

interface FormProps {
  addTodo: (newText: string) => void
}

const TodoForm = ({ addTodo }: FormProps): JSX.Element => {
  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault()
    addTodo(value)
    reset()
  }

  const [value, handleChange, reset] = useInputState("")
  return (
    <FormWrap>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} name="todo-input" id="todo-input" onChange={handleChange} />
      </form>
    </FormWrap>
  )
}

export default TodoForm
