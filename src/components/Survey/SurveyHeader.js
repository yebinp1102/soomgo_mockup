import React from 'react'
import styledComponents from 'styled-components'
import StarIcon from '@mui/icons-material/Star';

const SurveyHeader = () => {
  return (
    <Header>
      <div className='headerDark'>
          <div className='container'>
            <h1>방송 댄스 레슨</h1>
            <div className='rate'>
              <span><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></span>
              <span>4.9</span>
            </div>
            <ul className='records'>
              <li className='record'>
                <h2>12,630</h2>
                <p>활동 고수</p>
              </li>
              <li className='record'>
                <h2>120,447</h2>
                <p>누적 요청서</p>
              </li>
              <li className='record'>
                <h2>3,945</h2>
                <p>리뷰 수</p>
              </li>
            </ul>
          </div> 
        </div>
    </Header>
  )
}

export default SurveyHeader

const Header = styledComponents.div`
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://cdn.pixabay.com/photo/2018/02/22/23/07/people-3174228_1280.jpg");
  background-position: center;
  .headerDark{
    height: 100%;
    background-color: rgba(0,0,0, .5);

    color: #fff;

    .container{
      padding: 50px;

      h1{
        font-size: 3rem;
      }

      .rate{
        display: flex;
        align-items: center;
        color: #ECB365;
        margin: 5px 0 30px 0;
        
        span:last-child{
          font-size: 20px;
          margin-left: 10px;
          font-weight: bold;
        }
      }

      .records{
        display: flex;
        
        .record{
          padding: 20px;
          border-right: 1px solid lightgray;
          font-size: 18px;

          h2{
            margin-bottom: 5px;
          }
        }

        .record:last-child{
          border-right: none;
        }
      }
    }
  }
`;