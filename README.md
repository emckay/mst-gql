# Error 1: Duplicate objects in MST

Error Something went wrong

Message: [mobx-state-tree] Cannot add an object to a state tree if it is already part of the same or another state tree. Tried to assign an object to '/todos/0', but it lives already at '/basicTodos/0'

WORKAROUND: https://github.com/mobxjs/mst-gql/pull/114

# Error 2: Circular reference error

At run-time `FancyTodoModel.base` is undefined due to circular references:

```
Uncaught TypeError: Cannot read property 'actions' of undefined
    at Object.parcelRequire.../src/app/models/FancyTodoModel.ts../FancyTodoModel.base (FancyTodoModel.ts:18)
    at newRequire (app.d221c077.js:47)
    at localRequire (app.d221c077.js:53)
    at Object.parcelRequire.../src/app/models/TodoListModel.base.ts.mobx-state-tree (TodoListModel.base.ts:9)
    at newRequire (app.d221c077.js:47)
    at localRequire (app.d221c077.js:53)
    at Object.parcelRequire.../src/app/models/FancyTodoModel.base.ts.mobx-state-tree (FancyTodoModel.base.ts:10)
    at newRequire (app.d221c077.js:47)
    at localRequire (app.d221c077.js:53)
    at Object.parcelRequire.../src/app/models/TodoModelSelector.ts.mst-gql (TodoModelSelector.ts:9)
```
