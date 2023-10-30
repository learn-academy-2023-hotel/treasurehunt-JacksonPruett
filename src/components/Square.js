import React from "react"

const Square = ({value}) => {
  // destructuring props
  // const { value } = props; is same as props.value
  // instead pass destructured prop om the parenthesis

  return (
    <>
      <div className="square">{value}</div>
    </>
  )
}
export default Square
