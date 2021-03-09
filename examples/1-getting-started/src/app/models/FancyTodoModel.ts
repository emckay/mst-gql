import { Instance } from "mobx-state-tree"
import { FancyTodoModelBase } from "./FancyTodoModel.base"

/* The TypeScript type of an instance of FancyTodoModel */
export interface FancyTodoModelType
  extends Instance<typeof FancyTodoModel.Type> {}

/* A graphql query fragment builders for FancyTodoModel */
export {
  selectFromFancyTodo,
  fancyTodoModelPrimitives,
  FancyTodoModelSelector
} from "./FancyTodoModel.base"

/**
 * FancyTodoModel
 */
export const FancyTodoModel = FancyTodoModelBase.actions((self) => ({
  // This is an auto-generated example action.
  log() {
    console.log(JSON.stringify(self))
  }
}))
