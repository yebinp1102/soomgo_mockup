import React from 'react'
import styledComponents from 'styled-components'


const Result = () => {
  return (
    <ResultWrap>
      <h1>받은 견적</h1>
      <div className="grid">
        <div className="resultCard">
          <div className="cardTop">
            <button>X 취소</button>
            <span>2022.03.13</span>
          </div>
          <h2 className="cardTitle">소프트웨어 개발</h2>
          <img className="profileImg" src="https://i.pinimg.com/564x/15/4c/41/154c411aede931d62d3aaebe5f26a0b9.jpg" />
          <button className="cardBottom">자세히 보기</button>
        </div>

        <div className="resultCard">
          <div className="cardTop">
            <button>X 취소</button>
            <span>2022.03.13</span>
          </div>
          <h2 className="cardTitle">소프트웨어 개발</h2>
          <img className="profileImg" src="https://i.pinimg.com/564x/15/4c/41/154c411aede931d62d3aaebe5f26a0b9.jpg" />
          <button className="cardBottom">자세히 보기</button>
        </div>

        <div className="resultCard">
          <div className="cardTop">
            <button>X 취소</button>
            <span>2022.03.13</span>
          </div>
          <h2 className="cardTitle">소프트웨어 개발</h2>
          <img className="profileImg" src="https://i.pinimg.com/564x/15/4c/41/154c411aede931d62d3aaebe5f26a0b9.jpg" />
          <button className="cardBottom">자세히 보기</button>
        </div>

        <div className="resultCard">
          <div className="cardTop">
            <button>X 취소</button>
            <span>2022.03.13</span>
          </div>
          <h2 className="cardTitle">소프트웨어 개발</h2>
          <img className="profileImg" src="https://i.pinimg.com/564x/15/4c/41/154c411aede931d62d3aaebe5f26a0b9.jpg" />
          <button className="cardBottom">자세히 보기</button>
        </div>

      </div>
    </ResultWrap>
  )
}

export default Result

const ResultWrap = styledComponents.div`
  margin: 100px 0 50px 0;

  h1{
    font-size: 2.5rem;
  }

  .grid{
    margin-top: 50px;
    gap: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .resultCard{
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 5px;

    .cardTop{
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      color: gray;

      button{
        border: none;
        padding: 5px 10px;
        cursor: pointer;
      }
    }

    .cardTitle{
      margin: 15px 0;
    }
    
    img{
      width: 40px;
      margin-bottom: 25px;
      border-radius: 5px;
    }

    .cardBottom{
      padding: 15px;
      font-size: 1.2rem;
      font-weight: 600;
      background-color: #00B4D8;
      border: none;
      color: #fff;
      cursor: pointer;
    }
  }
`;