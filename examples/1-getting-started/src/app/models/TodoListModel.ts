import { Instance } from "mobx-state-tree"
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
export const TodoListModel = TodoListModelBase.actions((self) => ({
  // This is an auto-generated example action.
  log() {
    console.log(JSON.stringify(self))
  }
}))
