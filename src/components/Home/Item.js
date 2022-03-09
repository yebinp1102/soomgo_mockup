import React from 'react'
import styledComponents from 'styled-components'

const Item = ({ img, desc, price }) => {
  return (
    <ItemInfo>
      <img src={img} />
      <p className='desc'>{desc}</p>
      <p className='price'>{price}</p>
    </ItemInfo>
  )
}

export default Item

const ItemInfo = styledComponents.div`
  img{
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }
  .desc{
    margin: 8px 0;
    font-size: 20px;
  }
  .price{
    font-weight: bold;
    color: #03045E;
    font-size: 20px;
  }
`;