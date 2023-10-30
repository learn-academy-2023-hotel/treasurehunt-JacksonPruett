import React from "react"


const Square = ({value, index, handleSquareClick}) => {
  // destructuring props
  // const { value } = props; is same as props.value
  // instead pass destructured prop om the parenthesis
  const handleClick = () => {
    handleSquareClick(index)
  }

  return (
    <>
      <div className="square" onClick={handleClick}>{value}</div>
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
