import React from 'react'
import styledComponents from 'styled-components'

const Tip = ({topic, title, author, img}) => {
  return (
    <Container>
      <Texts>
        <p className='light'>{topic}</p>
        <p className='bold'>{title}</p>
        <p className='light'>{author}</p>
      </Texts>
      <img src={img} />
    </Container>
  )
}

export default Tip

const Container = styledComponents.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  height: 100%;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const Texts = styledComponents.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  
  .light{
    color: gray;
  }

  .bold{
    margin: 5px 0;
  }

  p{
    font-size: 20px;
  }
`;