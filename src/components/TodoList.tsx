import React from "react"
import styled from "styled-components"

interface ListProps {
  todos: Array<any> | null
  addTodo: (newText: string) => void
}

const ListWrap = styled.div`
  display: flex;
  justify-content: center;
`

const List = styled.ul`
  padding-left: 0;
  width: 80%;
  text-align: center;
`

const Item = styled.li`
  font-size: 16px;
  list-style-type: none;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.3) 100%);
`

const TodoList = ({ todos, addTodo }: ListProps): JSX.Element => {
  return (
    <ListWrap>
      <List>
        {todos &&
          todos.map((todo, index) => {
            return <Item key={index}>{todo.text}</Item>
          })}
      </List>
    </ListWrap>
  )
}

export default TodoList
