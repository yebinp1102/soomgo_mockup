import React from 'react'
import Content from './Home/Content'
import Popular from './Home/Popular'
import Slider from './Home/Slider'
import Tips from './Home/Tips'

const Home = () => {
  return (
    <>
      <Slider />
      <Content
        title="지금 바로 원하는 서비스를 받아보세요!"
      />
      <Content
        title="숨고 인기 서비스"
      />
      <Popular />
      <Tips />
      <Content
        title="숨고 인기 서비스"
      />
    </>
  )
}

export default Home