import React from "react"
import * as ReactDOM from "react-dom"
import { createHttpClient } from "mst-gql"

import "./index.css"

import { RootStore } from "./models/RootStore"
import { StoreContext } from "./models/reactUtils"
import { Home } from "./Home"
import { ServerString } from "./components"
import { applySnapshot, getSnapshot } from "mobx-state-tree"

const rootStore = RootStore.create(undefined, {
  gqlHttpClient: createHttpClient("http://localhost:3001/graphql")
})

const rootStore2 = RootStore.create(undefined, {
  gqlHttpClient: createHttpClient("http://localhost:3001/graphql")
})

export const App: React.FC = () => (
  <StoreContext.Provider value={rootStore}>
    <main>
      <h1>
        <ServerString />
      </h1>
      <Home />
    </main>
  </StoreContext.Provider>
)

ReactDOM.render(<App />, document.getElementById("root"))

setTimeout(() => {
  const ss = getSnapshot(rootStore)
  console.log("ss", ss)
  applySnapshot(rootStore2, ss)
  console.log(
    "completed todos in original rootstore",
    rootStore.todoLists.get("0")?.todos?.filter((t) => t.complete)
  )
  console.log(
    "completed todos in rehydrated rootstore",
    rootStore2.todoLists.get("0")?.todos?.filter((t) => t.complete)
  )
}, 2000)
