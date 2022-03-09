import React from 'react'
import styledComponents from 'styled-components'
import StarIcon from '@mui/icons-material/Star';

const List = ({img, name, field, rate}) => {
  return (
    <>
      <ListInfo>
        <img src={img} />
        <h3 className='name'>{name}</h3>
        <p className='field'>{field}</p>
        <div className='rate'>
          <StarIcon className='star'/>
          <span>{rate} (19)</span>
        </div>
      </ListInfo>
    </>  
  )
}

export default List

const ListInfo = styledComponents.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  
  .name{
    margin: 15px 0 5px 0;
  }
  .field{
    color: gray;
    font-size: 15px;
  }
  .rate{
    display: flex;
    align-items: center;
    margin-top: 5px;
    font-weight: bold;

    .star{
      color: #00B4D8;
      font-size: 17px;
      margin-right: 5px;
    }
  }
`;