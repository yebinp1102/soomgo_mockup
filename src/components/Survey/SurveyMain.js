import React, {useState} from 'react';
import styledComponents from 'styled-components'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Link } from 'react-router-dom';

const SurveyMain = () => {
  const [page, setPage] = useState(1);
  
  const handlePageCount = () => {
    setPage(page+1);
  }

  return (
    <MainForm>
      <div className='container'>
        <div className='formWrap'>
            { page===1  && (
              <>
                <h1>레슨을 받는 목적이 무엇인가요?</h1>
                <ul className='form'>      
                  <li>
                    <RadioButtonCheckedIcon />
                    <span>취미</span>
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
              </>
              )
            }
            {  page===2  && (
                <>
                <h1>어떤 레슨 형태를 원하시나요?</h1>
                <ul className='form'>      
                  <li>
                    <RadioButtonCheckedIcon />
                    <span>개인 레슨</span>
                  </li>
                  <li>
                    <RadioButtonUncheckedIcon />
                    <span>그룹 레슨</span>
                  </li>
                  <li>
                    <RadioButtonUncheckedIcon />
                    <span>학원</span>
                  </li>
                  <li>
                    <RadioButtonUncheckedIcon />
                    <span>무관</span>
                  </li>
                  <li>
                    <RadioButtonUncheckedIcon />
                    <span>기타</span>
                  </li>
                </ul>
              </>
              )
            }
            {  page===3  && (
                <>
                <h1>레슨생의 연령대는 어떻게 되나요?</h1>
                <ul className='form'>      
                  <li>
                    <RadioButtonCheckedIcon />
                    <span>10대 미만</span>
                  </li>
                  <li>
                    <RadioButtonUncheckedIcon />
                    <span>10대</span>
                  </li>
                  <li>
                    <RadioButtonUncheckedIcon />
                    <span>20대</span>
                  </li>
                  <li>
                    <RadioButtonUncheckedIcon />
                    <span>30대</span>
                  </li>
                  <li>
                    <RadioButtonUncheckedIcon />
                    <span>40대 이상</span>
                  </li>
                </ul>
              </>
              )
            }
            {  page===4  && (
               <>
               <h1>레슨 희망 날짜는 언제인가요?</h1>
               <ul className='form'>      
                 <li>
                   <RadioButtonCheckedIcon />
                   <span>협의 가능해요.</span>
                 </li>
                 <li>
                   <RadioButtonUncheckedIcon />
                   <span>가능한 빨리 진행하고 싶어요.</span>
                 </li>
                 <li>
                   <RadioButtonUncheckedIcon />
                   <span>일주일 내로 진행하고 싶어요.</span>
                 </li>
                 <li>
                   <RadioButtonUncheckedIcon />
                   <span>여유가 있어요</span>
                 </li>
                 <li>
                   <RadioButtonUncheckedIcon />
                   <span>기타</span>
                 </li>
               </ul>
             </>
              )
            }
          <p className="pageNum">{page}/4</p>
          <div className="alignRight">
          {page >= 4 ? (
            <>
              <button onClick={()=>setPage(page-1)} className='btn'>이전</button>
              <Link to="/request/sent" className='submit' onClick={()=>alert("설문 조사가 제출 되었습니다.")}>제출</Link>
            </>
          ) : ( page === 1 ? (
              <button onClick={handlePageCount} className='btn'>다음</button>            
            ) : (
              <>
                <button onClick={()=>setPage(page-1)} className='btn'>이전</button>
                <button onClick={handlePageCount} className='btn'>다음</button>            
              </>
            )
          )}
          </div>
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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;

    .formWrap{
      margin: 40px 0;
      z-index: 999;
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

      .pageNum{
        font-size: 20px;
        margin-top: 30px;
        text-align: right;
      }

      .alignRight{
        text-align: right;
      
        .btn{
          padding: 15px 45px;
          font-size: 18px;
          background-color: #00B4D8;
          border: none;
          border-radius: 5px;
          color: #fff;
          margin-top: 60px;
          margin-right: 15px;
          cursor: pointer;
          font-weight: bold;
        }
        .submit{
          border: 1px solid gray;
          padding: 14px 44px;
          border-radius: 5px;
          font-weight: 600;
          font-size: 18px;
          margin-right: 15px;
        }
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