import React, { useState } from "react"

// type FormElem = React.FormEvent<HTMLFormElement>

// type StateReturned = {
//   value: string;
//   handleChange: () => void;
//   reset: () => void;
// }[]

export default function useInputState(initialVal: string): any[] {
  const [value, setValue] = useState(initialVal)

  const handleChange = (e: React.MouseEvent<HTMLButtonElement>): void => setValue(e.currentTarget.value)
  const reset = () => setValue("")

  return [value, handleChange, reset]
}
