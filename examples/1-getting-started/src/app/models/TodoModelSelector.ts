/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { QueryBuilder } from "mst-gql"
import { BasicTodoModelType } from "./BasicTodoModel"
import { BasicTodoModelSelector, basicTodoModelPrimitives } from "./BasicTodoModel.base"
import { FancyTodoModelType } from "./FancyTodoModel"
import { FancyTodoModelSelector, fancyTodoModelPrimitives } from "./FancyTodoModel.base"

export type TodoUnion = BasicTodoModelType | FancyTodoModelType

export class TodoModelSelector extends QueryBuilder {
  basicTodo(builder?: string | BasicTodoModelSelector | ((selector: BasicTodoModelSelector) => BasicTodoModelSelector)) { return this.__inlineFragment(`BasicTodo`, BasicTodoModelSelector, builder) }
  fancyTodo(builder?: string | FancyTodoModelSelector | ((selector: FancyTodoModelSelector) => FancyTodoModelSelector)) { return this.__inlineFragment(`FancyTodo`, FancyTodoModelSelector, builder) }
}
export function selectFromTodo() {
  return new TodoModelSelector()
}

// provides all primitive fields of union member types combined together
export const todoModelPrimitives = selectFromTodo().basicTodo(basicTodoModelPrimitives).fancyTodo(fancyTodoModelPrimitives)