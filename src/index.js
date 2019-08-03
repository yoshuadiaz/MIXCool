import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import HakunaMatata from "./containers/HomeContainer"
import YOLO from "./containers/YOLOContainer"

const initialState = {
  counter: 0,
  message: "Hello World",
  valueToOperate: 10
}
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUMAR UNO":
      return { ...state, counter: state.counter + 1 }
    case "RESTAR UNO":
      return { ...state, counter: state.counter - 1 }
    case "SUMAR LO QUE SEA":
      return {
        ...state,
        counter: state.counter + parseInt(action.payload)
      }
    case "RESTAR LO QUE SEA":
      return {
        ...state,
        counter: state.counter - parseInt(action.payload)
      }
    case "UPDATE valueToOperate":
      return {
        ...state,
        valueToOperate: action.payload
      }
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
    <YOLO />
    <HakunaMatata />
  </Provider>,
  document.getElementById("root")
)
