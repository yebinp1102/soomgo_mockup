import React from 'react'
import styledComponents from 'styled-components'

const Slider = () => {
  return (
    <>
      <Container>
        <img src='https://assets.cdn.soomgo.com/images/banner/banner-model-recommend-service-web.png' />
      </Container>
    </>
  )
}

export default Slider

const Container = styledComponents.div`
  max-width: 1200px;
  margin: 40px auto;
  img{
    width: 100%;
    height: auto;
    border-radius: 15px;
  }
`;