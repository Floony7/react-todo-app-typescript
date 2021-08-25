import React, { useState } from "react"
import { nanoid } from "nanoid"
import { Grid, Container } from "./styles/Layout"
import TodoList from "./TodoList"
import styled from "styled-components"
import TodoForm from "./TodoForm"

interface ITodo {
  id: string
  text: string
  completed: boolean
}

const Main = styled.main`
  padding: 1rem 0;
`

export default function TodoApp() {
  const [todos, setTodos] = useState<ITodo[]>([])

  const addTodo = (newText: string): void => {
    setTodos([...todos, { id: nanoid(6), text: newText, completed: false }])
  }

  //   const handleComplete = (id: string, todos: ITodo[]): boolean => {
  //       const selectedTodo = todos.find(todo => todo.id === id)
  //       setTodos([...todos, selectedTodo.completed = }] )
  //   }

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
          <TodoList todos={todos} />
        </Container>
      </Main>
      <div className="footer">
        <Container>Footer</Container>
      </div>
    </Grid>
  )
}

// id, task, completed
