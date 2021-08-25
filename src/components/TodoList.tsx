import React from "react"
import styled from "styled-components"

interface ListProps {
  todos: Array<any> | null
  // addTodo: (newText: string) => void
}

const ListWrap = styled.div`
  display: flex;
  justify-content: center;
`

const List = styled.ul`
  padding-left: 0;
  width: 100%;
`

const Item = styled.li`
  font-size: 16px;
  list-style-type: none;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.3) 100%);
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  width: 100;
`

const Check = styled.input.attrs({ type: "checkbox" })`
  border: 5px solid rebeccapurple;
`

// const handleCompleted = (id: string, completed: boolean): void => {
//   ()
// }

const TodoList = ({ todos }: ListProps): JSX.Element => {
  return (
    <ListWrap>
      <List>
        {todos &&
          todos.map((todo, index) => {
            console.log(todo.completed)
            return (
              <Item key={todo.id}>
                {todo.text}
                <Check />
              </Item>
            )
          })}
      </List>
    </ListWrap>
  )
}

export default TodoList
