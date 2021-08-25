import React from "react"

interface TodoProps {
  id: string
  text: string
  completed: boolean
}

const Todo = ({ id, text, completed }: TodoProps): JSX.Element => {
  return (
    <div>
      <p>I am a Todo</p>
    </div>
  )
}

export default Todo
