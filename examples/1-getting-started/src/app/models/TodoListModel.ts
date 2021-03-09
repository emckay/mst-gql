import { Instance, types } from "mobx-state-tree"
import { MSTGQLRef } from "mst-gql"
import { BasicTodoModel } from "."
import { FancyTodoModel } from "./FancyTodoModel"
import { TodoListModelBase } from "./TodoListModel.base"

/* The TypeScript type of an instance of TodoListModel */
export interface TodoListModelType
  extends Instance<typeof TodoListModel.Type> {}

/* A graphql query fragment builders for TodoListModel */
export {
  selectFromTodoList,
  todoListModelPrimitives,
  TodoListModelSelector
} from "./TodoListModel.base"

/**
 * TodoListModel
 */
export const TodoListModel = TodoListModelBase.props({
  // Workaround: https://github.com/mobxjs/mst-gql/pull/114
  todos: types.union(
    types.undefined,
    types.array(
      types.union(
        MSTGQLRef(types.late((): any => FancyTodoModel)),
        MSTGQLRef(types.late((): any => BasicTodoModel))
      )
    )
  )
}).actions((self) => ({
  // This is an auto-generated example action.
  log() {
    console.log(JSON.stringify(self))
  }
}))
