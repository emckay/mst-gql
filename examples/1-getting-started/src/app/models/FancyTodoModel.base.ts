/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * FancyTodoBase
 * auto generated base class for the model FancyTodoModel.
 */
export const FancyTodoModelBase = ModelBase
  .named('FancyTodo')
  .props({
    __typename: types.optional(types.literal("FancyTodo"), "FancyTodo"),
    id: types.identifier,
    label: types.union(types.undefined, types.null, types.string),
    color: types.union(types.undefined, types.null, types.string),
    complete: types.union(types.undefined, types.null, types.boolean),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class FancyTodoModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get label() { return this.__attr(`label`) }
  get color() { return this.__attr(`color`) }
  get complete() { return this.__attr(`complete`) }
}
export function selectFromFancyTodo() {
  return new FancyTodoModelSelector()
}

export const fancyTodoModelPrimitives = selectFromFancyTodo().label.color.complete
