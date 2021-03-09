/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { TodoListModel, TodoListModelType } from "./TodoListModel"
import { TodoListModelSelector } from "./TodoListModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  todoLists: IObservableArray<TodoListModelType>;
}

/**
 * BasicTodoBase
 * auto generated base class for the model BasicTodoModel.
 */
export const BasicTodoModelBase = withTypedRefs<Refs>()(ModelBase
  .named('BasicTodo')
  .props({
    __typename: types.optional(types.literal("BasicTodo"), "BasicTodo"),
    id: types.identifier,
    text: types.union(types.undefined, types.null, types.string),
    complete: types.union(types.undefined, types.null, types.boolean),
    todoLists: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => TodoListModel)))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class BasicTodoModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get text() { return this.__attr(`text`) }
  get complete() { return this.__attr(`complete`) }
  todoLists(builder?: string | TodoListModelSelector | ((selector: TodoListModelSelector) => TodoListModelSelector)) { return this.__child(`todoLists`, TodoListModelSelector, builder) }
}
export function selectFromBasicTodo() {
  return new BasicTodoModelSelector()
}

export const basicTodoModelPrimitives = selectFromBasicTodo().text.complete
