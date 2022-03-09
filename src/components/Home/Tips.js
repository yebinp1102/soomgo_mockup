import React from 'react'
import styledComponents from 'styled-components'
import Tip from './Tip'

const Tips = () => {
  return (
    <>
      <Container>
        <h1>고수들의 노하우</h1>
        <TipWrap>
          <TipMain>
            <div className='text'>
              <p>이혼 소송</p>
              <p className='bold'>배우자 외도로 인한 이혼 소송 절차</p>
              <p>조건한법률사무소</p>  
            </div>
          </TipMain>
          <TipSub>
            <Tip
              topic="종합 광고 대행"
              title="마케팅, 왜 의뢰 하는가?"
              author="권성수 광고 디렉터 브랜딩 전문가"
              img="https://static.cdn.soomgo.com/upload/talkboard/ca970284-077c-4061-bfc7-c58e2e5fbd50.jpg"
            />
            <Tip
              topic="종합 광고 대행"
              title="마케팅, 왜 의뢰 하는가?"
              author="권성수 광고 디렉터 브랜딩 전문가"
              img="https://static.cdn.soomgo.com/upload/talkboard/ca970284-077c-4061-bfc7-c58e2e5fbd50.jpg"
            />
            <Tip
              topic="종합 광고 대행"
              title="마케팅, 왜 의뢰 하는가?"
              author="권성수 광고 디렉터 브랜딩 전문가"
              img="https://static.cdn.soomgo.com/upload/talkboard/ca970284-077c-4061-bfc7-c58e2e5fbd50.jpg"
            />
          </TipSub>
        </TipWrap>
      </Container>
    </>
  )
}

export default Tips

const Container = styledComponents.div`
  max-width: 1200px;
  margin: 80px auto;
`;

const TipWrap = styledComponents.div`
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 1fr;
  margin-top: 40px;
`;

const TipMain = styledComponents.div`
  background-image: url("https://static.cdn.soomgo.com/upload/talkboard/87edd147-4481-42fe-871c-7545db3b958e.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  color: #fff;

  .text{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    padding: 20px;

    p{
      margin-bottom: 8px;
      font-size: 18px;
    }

    .bold{
      font-size: 20px;
    }
  }
`;

const TipSub = styledComponents.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;  
`;