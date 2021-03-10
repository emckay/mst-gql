/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { BasicTodoModel, BasicTodoModelType } from "./BasicTodoModel"
import { basicTodoModelPrimitives, BasicTodoModelSelector } from "./BasicTodoModel.base"
import { FancyTodoModel, FancyTodoModelType } from "./FancyTodoModel"
import { fancyTodoModelPrimitives, FancyTodoModelSelector } from "./FancyTodoModel.base"
import { TodoListModel, TodoListModelType } from "./TodoListModel"
import { todoListModelPrimitives, TodoListModelSelector } from "./TodoListModel.base"

import { todoModelPrimitives, TodoModelSelector , TodoUnion } from "./"


export type CreateTodoInput = {
  id: string
  text: string
  complete?: boolean
}
/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  basicTodos: ObservableMap<string, BasicTodoModelType>,
  fancyTodos: ObservableMap<string, FancyTodoModelType>,
  todoLists: ObservableMap<string, TodoListModelType>
}


/**
* Enums for the names of base graphql actions
*/
export enum RootStoreBaseQueries {
queryTodos="queryTodos",
queryTodoList="queryTodoList",
queryStringFromServer="queryStringFromServer"
}
export enum RootStoreBaseMutations {
mutateToggleTodo="mutateToggleTodo",
mutateCreateTodo="mutateCreateTodo",
mutateReturnBoolean="mutateReturnBoolean"
}

/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = withTypedRefs<Refs>()(MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['BasicTodo', () => BasicTodoModel], ['FancyTodo', () => FancyTodoModel], ['TodoList', () => TodoListModel]], ['BasicTodo', 'FancyTodo', 'TodoList'], "js"))
  .props({
    basicTodos: types.optional(types.map(types.late((): any => BasicTodoModel)), {}),
    fancyTodos: types.optional(types.map(types.late((): any => FancyTodoModel)), {}),
    todoLists: types.optional(types.map(types.late((): any => TodoListModel)), {})
  })
  .actions(self => ({
    queryTodos(variables?: {  }, resultSelector: string | ((qb: TodoModelSelector) => TodoModelSelector) = todoModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ todos: TodoUnion[]}>(`query todos { todos {
        ${typeof resultSelector === "function" ? resultSelector(new TodoModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryTodoList(variables?: {  }, resultSelector: string | ((qb: TodoListModelSelector) => TodoListModelSelector) = todoListModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ todoList: TodoListModelType}>(`query todoList { todoList {
        ${typeof resultSelector === "function" ? resultSelector(new TodoListModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryStringFromServer(variables: { string?: string }, options: QueryOptions = {}) {
      return self.query<{ stringFromServer: string }>(`query stringFromServer($string: String) { stringFromServer(string: $string) }`, variables, options)
    },
    mutateToggleTodo(variables: { id: string }, resultSelector: string | ((qb: TodoModelSelector) => TodoModelSelector) = todoModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ toggleTodo: TodoUnion}>(`mutation toggleTodo($id: ID!) { toggleTodo(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new TodoModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateTodo(variables: { todo: CreateTodoInput }, resultSelector: string | ((qb: TodoModelSelector) => TodoModelSelector) = todoModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createTodo: TodoUnion}>(`mutation createTodo($todo: CreateTodoInput!) { createTodo(todo: $todo) {
        ${typeof resultSelector === "function" ? resultSelector(new TodoModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateReturnBoolean(variables: { toReturn: boolean }, optimisticUpdate?: () => void) {
      return self.mutate<{ returnBoolean: boolean }>(`mutation returnBoolean($toReturn: Boolean!) { returnBoolean(toReturn: $toReturn) }`, variables, optimisticUpdate)
    },
  })))
