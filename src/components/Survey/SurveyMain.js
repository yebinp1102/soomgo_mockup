import React from 'react'
import styledComponents from 'styled-components'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const SurveyMain = () => {
  return (
    <MainForm>
      <div className='container'>
        <div className='formWrap'>
          <h1>레슨을 받는 목적이 무엇인가요?</h1>
          <ul className='form'>
            <li>
              <RadioButtonCheckedIcon />
              <span>취미/다이어트</span>
            </li>
            <li>
              <RadioButtonUncheckedIcon />
              <span>오디션 준비</span>
            </li>
            <li>
              <RadioButtonUncheckedIcon />
              <span>공연/장기자랑 준비</span>
            </li>
            <li>
              <RadioButtonUncheckedIcon />
              <span>입시 준비</span>
            </li>
            <li>
              <RadioButtonUncheckedIcon />
              <span>기타</span>
            </li>
          </ul>
          <button className='btn'>다음</button>
        </div>
        <div className='subInfo'>
          <div className='info'>
            <h3>숨고는 어떤 곳인가요?</h3>
            <p>
            서비스가 필요한 고객과 서비스를 제공하는 숨은 고수를 쉽고 빠르게 연결해드리는 전문가 매칭 서비스입니다.
            1분 내외의 요청서를 작성하면, 여러 고수님들이 맞춤형 견적을 보내드려요.
            맘에 쏙 드는 고수의 맞춤형 서비스를 받아보세요.
            </p>
          </div>
          <div className='info'>
            <h3>방송댄스 레슨 고수만을 모았다!</h3>
            <p>
            방송 댄스에 관심이 있는데 시작이 어려웠나요?
            퇴근 후 취미 생활, 원데이 클래스 등 방송 댄스를 배워보고 싶다면 요청서를 작성해보세요.
            선생님 프로필, 커리큘럼, 비용 비교하고 결정할 수 있어요.
            숨고를 통해 지금 바로 방송 댄스를 시작하세요!
            </p>
          </div>
        </div>
      </div>
    </MainForm>
  )
}

export default SurveyMain

const MainForm = styledComponents.div`
  background-color: #eee;

  .container{
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;

    .formWrap{
      position: relative;
      top: -70px;
      background-color: #fff;
      padding: 50px 40px;
      border: 1px solid gray;
      border-radius: 10px;
      
      h1{
        text-align: center;
        font-weight: 600;
      }

      .form{
        border: 1px solid lightgray;
        margin-top: 80px;
        border-radius: 5px;

        li{
          padding: 25px;
          border-bottom: 1px solid lightgray;
          display: flex;
          align-items: center;
          font-size: 20px;
          font-weight: 600;
          cursor: pointer;
          
          svg{
            color: gray;
            margin-right: 10px;
          }
        }

        li:first-child{
          color: #00B4D8;
          svg{
            color: inherit;
          }
        }

        li:last-child{
          border-bottom: none;
        }
      }

      .btn{
        padding: 15px 45px;
        font-size: 18px;
        background-color: #00B4D8;
        border: none;
        border-radius: 5px;
        color: #fff;
        margin-top: 60px;
        cursor: pointer;
        font-weight: bold;
      }
    }

    .subInfo{
      margin-top: 70px;

      .info{
        margin-bottom: 50px;
        p{
          margin-top: 10px;
          font-size: 18px;
          color: gray;
          line-height: 1.5;
        }
      }
    }
  }
`