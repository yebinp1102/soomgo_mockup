import React from 'react'
import Result from './Survey/Result';
import Content from './Home/Content'


const Request = () => {
  return (
    <>
      <div className="container">
        <Result />
        <Content
        title="숨고 인기 서비스"
        />
      </div>
    </>
  )
}

export default Request