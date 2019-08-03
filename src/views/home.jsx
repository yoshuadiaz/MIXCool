import React from "react"

function Home(props) {
  return (
    <div>
      <h1>HOME</h1>
      <button onClick={props.sumarUno}>SUMAR UNO</button>
      <button onClick={props.restarUno}>RESTAR UNO</button>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  )
}

export default Home
