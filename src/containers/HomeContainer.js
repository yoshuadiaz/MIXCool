import { connect } from "react-redux"
import HomeView from "../views/home"

const mapStateToProps = ({ message, counter }) => ({
  message,
  counter
})

const mapDispatchToProps = dispatch => ({
  sumarUno: () => dispatch({ type: "SUMAR UNO" }),
  restarUno: () => dispatch({ type: "RESTAR UNO" })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView)
