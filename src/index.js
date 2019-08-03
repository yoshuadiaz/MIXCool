import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import HakunaMatata from "./containers/HomeContainer"
import YOLO from "./containers/YOLOContainer"

const initialState = {
  counter: 0,
  message: "Hello World"
}
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUMAR UNO":
      return { ...state, counter: state.counter + 1 }
    case "RESTAR UNO":
      return { ...state, counter: state.counter - 1 }
    default:
      return state
  }
}

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class Component extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <h1>Hola manitos </h1>
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <HakunaMatata />
    <YOLO />
  </Provider>,
  document.getElementById("root")
)
