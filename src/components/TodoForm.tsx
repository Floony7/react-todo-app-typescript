import React from "react"
import styled from "styled-components"
import useInputState from "../hooks/useInputState"

const FormWrap = styled.div`
  width: 100%;

  form {
    width: 100%;
  }

  input[type="text"] {
    width: 100%;
    line-height: 1.3;
    font-size: 15px;
    padding: 1rem;
    border: none;

    &:focus {
      outline: 4px solid greenyellow;
    }
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
