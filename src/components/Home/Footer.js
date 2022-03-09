import React from 'react'
import styledComponents from 'styled-components'

const Footer = () => {
  return (
    <FooterWrap>
      <Container>
        <Contact>
          <h1>1599-5319</h1>
          <p>평일 10:00 ~ 18:00</p>
          <p>(점심시간 13:00 ~ 14:00 제외•주말/공휴일 제외)</p>
        </Contact>
        <MoreInfo>
          <ul className='lists'>
            <li className='list'>
              <span>숨고소개</span>  
              <div className='links'>
                <a href='#'>회사소개</a>
                <a href='#'>채용안내</a>
              </div>
            </li>
            <li className='list'>
              <span>고객안내</span>
              <div className='links'>
                <a href='#'>이용안내</a>
                <a href='#'>안전정책</a>
                <a href='#'>예상금액</a>
                <a href='#'>고수찾기</a>
                <a href='#'>숨고보증</a>
                <a href='#'>고수에게묻다</a>
              </div>
            </li>
            <li className='list'>
              <span>고수안내</span>  
              <div className='links'>
                <a href='#'>이용안내</a>
                <a href='#'>고수가이드</a>
                <a href='#'>고수가입</a>
                <a href='#'>고수센터</a>
              </div>
            </li>
            <li className='list'>
              <span>고객센터</span>  
              <div className='links'>
                <a href='#'>공지사항</a>
                <a href='#'>자주묻는질문</a>
                <a href='#'>고수가입</a>
                <a href='#'>고수센터</a>
              </div>
            </li>
          </ul>

        </MoreInfo>
      </Container>
    </FooterWrap>
  )
}

export default Footer

const FooterWrap = styledComponents.div`
  background-color: #00B4D8;
  color: #fff;
  height: 250px;
`;

const Container = styledComponents.div`
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  padding: 30px;

`;

const Contact = styledComponents.div`
  display: flex;
  flex-direction: column;

  p{
    font-size: 18px;
    margin-top: 5px;
  }
`;

const MoreInfo = styledComponents.div`
  display: flex;
  
  .lists{
    width: 500px;
    display: flex;
    justify-content: space-between;

    .list{
      display: flex;
      flex-direction: column;
      font-weight: bold;

      span{
      }
  
      .links{
        display: flex;
        flex-direction: column;


        a{
          color: #85F4FF;
          margin-top: 5px;
        }
        a:hover{
          color: #fff;
        }
      }
    }
  }
`;