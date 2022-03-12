import React from 'react';
import styledComponents from 'styled-components';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <Link to="/">
          <Logo>
              <CoPresentIcon fontSize='2rem'/>
              <span>Soomgo</span>
          </Logo>  
        </Link>
        <Menu>
          <Link to="/buy">
            <li>바로구매</li>
          </Link>
          <Link to="/search/pro/레슨">
            <li>고수찾기</li>
          </Link>
          <Link to="/login">
            <li>로그인</li>
          </Link>
          <Link to="/sign-up">
            <li>회원가입</li>
          </Link>
        </Menu>
      </Container>
    </Nav>
  )
}

export default Navbar

const Nav = styledComponents.div`
  background-color: #00B4D8;
  color: #fff;
  height: 70px;
`;

const Container = styledComponents.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

const Logo = styledComponents.div`
  font-weight: bold;
  font-size: 2rem;
  display: flex;
  align-items: center;
  color: #fff;
  span{
    margin-left: 10px;
  }
`;

const Menu = styledComponents.ul`
  display: flex;
  li{
    font-size: 1.2rem;
    margin-right: 20px;
    transition: all .1s ease-in;
    padding-bottom: 5px;
    color: #fff;
  }
  li:hover{
    border-bottom: 2px solid #fff;
    font-weight: bold;
  }
`;