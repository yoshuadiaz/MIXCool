import React from "react"
import { connect } from "react-redux"

const YOLO = props => (
  <div>
    <h1>SOY YOLO y el counter esta en: {props.counter}</h1>
    <input
      type="text"
      value={props.valueToOperate}
      onChange={e =>
        !e.target.value
          ? props.updateValue(0)
          : props.updateValue(e.target.value)
      }
    />
    <button onClick={() => props.sumarLoQueSea(props.valueToOperate)}>
      SUMAR LO QUE SEA
    </button>
    <button onClick={() => props.restarLoQueSea(props.valueToOperate)}>
      RESTAR LO QUE SEA
    </button>
    <button onClick={props.sumarCinco}>SUMAR 5</button>
    <button onClick={props.restarCinco}>RESTAR 5</button>
  </div>
)

const mapStateToProps = ({ counter, valueToOperate }) => ({
  counter,
  valueToOperate
})

const mapDispatchToProps = dispatch => ({
  updateValue: valor =>
    dispatch({
      type: "UPDATE valueToOperate",
      payload: parseInt(valor)
    }),
  sumarLoQueSea: valor =>
    dispatch({
      type: "SUMAR LO QUE SEA",
      payload: parseInt(valor)
    }),
  restarLoQueSea: valor =>
    dispatch({
      type: "RESTAR LO QUE SEA",
      payload: parseInt(valor)
    }),
  sumarCinco: () =>
    dispatch({
      type: "SUMAR LO QUE SEA",
      payload: 5
    }),
  restarCinco: () =>
    dispatch({
      type: "RESTAR LO QUE SEA",
      payload: 5
    })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YOLO)
