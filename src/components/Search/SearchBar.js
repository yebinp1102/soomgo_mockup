import React from 'react';
import styledComponents from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({title}) => {
  return (
    <SearchWrap>
      <div className='darkback'>
        <div className='container'>
          <SearchContents>
            <div className='searchTitle'>
              <h1>{title}</h1>
              <p>지금 숨고와 함께 시작해보세요</p>
            </div>
            <SearchField>
              <input className='searchInput' type="text" placeholder='어떤 분야의 고수를 찾으시나요?' />
              <button>
                <SearchIcon />
                <span>고수 찾기</span>
              </button>
            </SearchField>
          </SearchContents>
        </div>
      </div>
    </SearchWrap>
  )
}

export default SearchBar

const SearchWrap = styledComponents.div`
  height: 600px;
  background-image: url("https://cdn.pixabay.com/photo/2018/03/01/14/48/woman-3190829_1280.jpg");
  background-repeat: no-reapeat;
  background-size: cover;
  background-position: center;

  .darkback{
    background-color: rgba(0, 0, 0, .6);
    height: 100%;
    color: #fff;
  }
  .container{ 
    height: 100%;
  }
`;

const SearchContents = styledComponents.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  
  .searchTitle{
    text-align: center;
    
    h1{
      font-size: 3rem;
    }
    p{
      font-size: 1.2rem;
      letter-spacing: 1px;
      margin: 10px 0 50px 0;
    }
  }
`;

const SearchField = styledComponents.div`
  width: 80%;
  display: flex;

  input{
    flex: 1; 
    padding: 20px;
    border-radius: 5px 0 0 5px;
    border: none;
    font-size: 20px;
  }
  input:focus{
    outline: none;
  }
  button{
    display: flex;
    align-items: center;
    font-size: 18px;
    padding: 10px 20px;
    border: none;
    border-radius: 0 5px 5px 0;
    background-color: #00B4D8;
    color: #fff;
  }
`;