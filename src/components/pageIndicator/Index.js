/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./Style.css"
const Index = (props) => {
  return (
    <>
    <div className='Page_indicator' >
    <h1> <img src={props.src}/>{props.name}</h1>
    </div>
    </>
  )
}

export default Index