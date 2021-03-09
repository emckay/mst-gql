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
 * FancyTodoBase
 * auto generated base class for the model FancyTodoModel.
 */
export const FancyTodoModelBase = withTypedRefs<Refs>()(ModelBase
  .named('FancyTodo')
  .props({
    __typename: types.optional(types.literal("FancyTodo"), "FancyTodo"),
    id: types.identifier,
    label: types.union(types.undefined, types.null, types.string),
    color: types.union(types.undefined, types.null, types.string),
    complete: types.union(types.undefined, types.null, types.boolean),
    todoLists: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => TodoListModel)))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class FancyTodoModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get label() { return this.__attr(`label`) }
  get color() { return this.__attr(`color`) }
  get complete() { return this.__attr(`complete`) }
  todoLists(builder?: string | TodoListModelSelector | ((selector: TodoListModelSelector) => TodoListModelSelector)) { return this.__child(`todoLists`, TodoListModelSelector, builder) }
}
export function selectFromFancyTodo() {
  return new FancyTodoModelSelector()
}

export const fancyTodoModelPrimitives = selectFromFancyTodo().label.color.complete
