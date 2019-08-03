import React from "react"
import { connect } from "react-redux"

const YOLO = props => (
  <div>
    <h1>SOY YOLO y el counter esta en: {props.counter}</h1>
  </div>
)

const mapStateToProps = ({ counter }) => ({
  counter
})

export default connect(mapStateToProps)(YOLO)
