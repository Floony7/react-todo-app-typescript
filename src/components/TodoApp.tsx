import React, { useState } from "react"
import { Grid, Container } from "./styles/Layout"
import TodoList from "./TodoList"
import styled from "styled-components"
import TodoForm from "./TodoForm"

interface ITodo {
  id: number
  text: string
  completed: boolean
}

const Main = styled.main`
  padding: 1rem 0;
`

export default function TodoApp() {
  const [todos, setTodos] = useState<ITodo[]>([])

  const addTodo = (newText: string): void => {
    setTodos([...todos, { id: 4, text: newText, completed: false }])
  }

  return (
    <Grid>
      <div className="header">
        <Container>
          <h3>On the Agenda</h3>
        </Container>
      </div>
      <Main className="main">
        <Container>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} addTodo={addTodo} />
        </Container>
      </Main>
      <div className="footer">
        <Container>Footer</Container>
      </div>
    </Grid>
  )
}

// id, task, completed
