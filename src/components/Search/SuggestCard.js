import React from 'react'
import { Link } from 'react-router-dom'
import styledComponents from 'styled-components'

const SuggestCard = ({img, title}) => {
  return (
    <Card>
      <img src={img} />
      <h3>{title}</h3>
    </Card>
  )
}

export default SuggestCard

const Card = styledComponents.div`
  height: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,.1);
  cursor: pointer;

  img{
    max-height: 250px;
    object-fit: cover;
  }
  h3{
    height: 50px;
    background-color: #fff;
    padding-top: 12px;
  }
`;