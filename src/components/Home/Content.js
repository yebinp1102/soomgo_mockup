import React from 'react'
import styledComponents from 'styled-components'
import Item from './Item'

const Content = ({title}) => {
  return (
    <>
      <Container>
        <h1 className='title'>{title}</h1>
        <ItemWrap>
          <Item
            img="https://static.cdn.soomgo.com/upload/instantPurchase/093cf30a-4416-41b9-9948-c9f40866d798.jpg?h=320&w=480"
            desc="생명을 불어넣는 개성적인 캐릭터 디자인 제작"
            price="770,000원 ~"
          />
          <Item
            img="https://dmmj3ljielax6.cloudfront.net/upload/service/05389ab5-c05d-45c8-abe1-d0b90019cb75.png"
            desc="생명을 불어넣는 개성적인 캐릭터 디자인 제작"
            price="770,000원 ~"
          />
          <Item
            img="https://static.cdn.soomgo.com/upload/instantPurchase/47638f85-e0f2-4a68-a4c8-afec0cdf724a.jpg?h=320&w=480"
            desc="생명을 불어넣는 개성적인 캐릭터 디자인 제작"
            price="770,000원 ~"
          />
          <Item
            img="https://dmmj3ljielax6.cloudfront.net/upload/service/6a497fde-2ba4-4a59-977c-41ce3be83e08.png"
            desc="생명을 불어넣는 개성적인 캐릭터 디자인 제작"
            price="770,000원 ~"
          />
        </ItemWrap>
      </Container>
    </>
  )
}

export default Content

const Container = styledComponents.div`
  max-width: 1200px;
  margin: 0 auto 100px auto;

  .title{
    margin-top: 100px;
  }
`;

const ItemWrap = styledComponents.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin-top: 40px;
`;
