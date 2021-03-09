import * as React from "react"
import { observer } from "mobx-react-lite"

import { useQuery } from "../models/reactUtils"
import { TodoUnion, BasicTodoModelType } from "../models"

const isBasicTodo = (obj: any): obj is BasicTodoModelType => {
  return obj.text
}

export const Todo = observer(({ todo }: { todo: TodoUnion }) => {
  const { setQuery, loading, error } = useQuery(undefined)

  const basicTodo = isBasicTodo(todo) ? todo : null
  const fancyTodo = !isBasicTodo(todo) ? todo : null

  return (
    <li>
      {basicTodo && (
        <p className={`${todo.complete ? "strikethrough" : ""}`}>
          {basicTodo.text}
        </p>
      )}
      {fancyTodo && (
        <p
          className={`${todo.complete ? "strikethrough" : ""}`}
          style={{ color: fancyTodo.color || "black" }}
        >
          Fancy: {fancyTodo.label}
        </p>
      )}
      {error && <span>Failed to update</span>}
      {loading && <span>(updating)</span>}
    </li>
  )
})
