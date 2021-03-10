/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { BasicTodoModel } from "./BasicTodoModel"
import { FancyTodoModel } from "./FancyTodoModel"
import { TodoModelSelector } from "./TodoModelSelector"
import { RootStoreType } from "./index"


/**
 * TodoListBase
 * auto generated base class for the model TodoListModel.
 */
export const TodoListModelBase = ModelBase
  .named('TodoList')
  .props({
    __typename: types.optional(types.literal("TodoList"), "TodoList"),
    id: types.identifier,
    todos: types.union(types.undefined, types.array(types.union(types.late(() => BasicTodoModel), types.late(() => FancyTodoModel)))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class TodoListModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  todos(builder?: string | TodoModelSelector | ((selector: TodoModelSelector) => TodoModelSelector)) { return this.__child(`todos`, TodoModelSelector, builder) }
}
export function selectFromTodoList() {
  return new TodoListModelSelector()
}

export const todoListModelPrimitives = selectFromTodoList()
