import React from "react"
import { observer } from "mobx-react-lite"
import { useQuery } from "./models/reactUtils"

import { Error, Loading, Todo } from "./components"
import { todoModelPrimitives, TodoUnion } from "./models"

export const Home = observer(() => {
  const { loading, error, data, query } = useQuery((store) =>
    store.queryTodoList({}, (t) => t.todos(todoModelPrimitives))
  )
  if (error) return <Error>{error.message}</Error>
  if (data) {
    return (
      <>
        <ul>
          {data.todoList?.todos?.map((todo) => (
            <Todo key={todo!.id} todo={todo as TodoUnion} />
          ))}
        </ul>
        {loading ? (
          <Loading />
        ) : (
          <button onClick={query!.refetch}>Refetch</button>
        )}
      </>
    )
  }
  return <Loading />
})
