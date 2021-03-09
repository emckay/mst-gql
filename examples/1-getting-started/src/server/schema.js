const fetch = require("isomorphic-fetch")

const store = {
  todos: [
    {
      id: 0,
      text: "Go to the shops",
      complete: false
    },
    {
      id: 1,
      text: "Pick up the kids",
      complete: true
    },
    {
      id: 2,
      text: "Install mst-gql",
      complete: false
    },
    {
      id: 3,
      label: "Install mst-gql",
      color: "salmon",
      complete: false
    }
  ]
}

const typeDefs = `
  union Todo = BasicTodo | FancyTodo
  type Query {
    todos: [Todo]
    todoList: TodoList!
    stringFromServer(string: String): String
  }
  type Mutation {
    toggleTodo(id: ID!): Todo
    createTodo(todo: CreateTodoInput!): Todo
    returnBoolean(toReturn: Boolean!): Boolean
  }
  type BasicTodo {
    id: ID,
    text: String,
    complete: Boolean,
    todoLists: [TodoList!]!
  }
  type FancyTodo {
    id: ID,
    label: String,
    color: String,
    complete: Boolean
    todoLists: [TodoList!]!
  }
  type User {
    todoLists: [TodoList!]!
  }
  type TodoList {
    id: ID!
    todos: [Todo!]!
    user: User!
  }

  input CreateTodoInput {
    id: ID!,
    text: String!,
    complete: Boolean,
  }
`

const resolvers = {
  Query: {
    todos: (root, args, context) => {
      return store.todos
    },
    stringFromServer: (root, { string }, context) => {
      return string || "No String Sent."
    },
    todoList: () => ({ id: 0, todos: store.todos })
  },
  Todo: {
    __resolveType(obj) {
      if (obj.label) return "FancyTodo"
      return "BasicTodo"
    }
  },
  Mutation: {
    toggleTodo: (root, args, context) => {
      const { id } = args
      store.todos[args.id].complete = !store.todos[args.id].complete
      return store.todos[args.id]
    },
    createTodo: (root, args, context) => {
      const todo = {
        ...args.todo,
        complete: !!args.todo.complete
      }
      store.todos.push(todo)
      return todo
    },
    returnBoolean: (root, args, context) => {
      return args.toReturn
    }
  }
}

module.exports = {
  typeDefs,
  resolvers,
  context: (headers, secrets) => {
    return {
      headers,
      secrets
    }
  }
}
