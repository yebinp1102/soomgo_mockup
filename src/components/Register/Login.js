import React, { useRef, useState, useEffect, useContext } from 'react';
// import AuthContext from "./context/AuthProvider"
import styledComponents from 'styled-components';
import { Link } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
  // const {setAuth} = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(()=>{
    userRef.current.focus();
  },[])

  useEffect(()=>{
    setErrMsg('');
  },[user, pwd])

  const handleSubmit = async(e) => {
    // preventDefault => form이 제출될 경우 페이지 리렌더링 방지
    e.preventDefault();
    console.log(user, pwd);
    // 제출되면 유저명, 비번 필드 초기화
    setUser('');
    setPwd('');
    setSuccess(true);
  }


  return (
    <SignupWrap>
      <Container>
        {success ? (
          <section>
            <h1>로그인에 성공하셨습니다!</h1>
            <br/>
            <p>
              <a href='#'>메인 페이지로 돌아가기</a>
            </p>
          </section>
        ): (
          <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>로그인</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor='username'>아이디:</label>
              <input 
                type="text" 
                id="username" 
                ref={userRef}
                autoComplete="off"
                onChange={(e)=>setUser(e.target.value)}
                value={user}
                required
                // 로그인 기능에서는 회원가입과 달리 유효성 검사가 필요하지 않기 때문에 aria 속성을 사용하지 않는다. 
              />
              <label htmlFor='password'>비밀번호:</label>
              <input 
                type="password" 
                id="password" 
                onChange={(e)=>setPwd(e.target.value)}
                value={pwd}
                required
                // 로그인 기능에서는 회원가입과 달리 유효성 검사가 필요하지 않기 때문에 aria 속성을 사용하지 않는다. 
              />
              <button className='loginBtn'>로그인</button>
              <button className='googleLogin'>
                <GoogleIcon />
                <span>Google로 로그인하기</span>
              </button>
            </form>
            <div className='toSignUp'>
              <p>계정이 없으신가요?</p>
              <Link to="/sign-up">회원가입</Link>
            </div>
          </section>
        )}
      </Container>
    </SignupWrap>
  )
}

export default Login

const SignupWrap = styledComponents.div`
  background-color: #EEEEEE;
  min-height: calc(100vh - 320px);
`;
const Container = styledComponents.div`
  min-height: calc(100vh - 320px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  section {
    width: 100%;
    max-width: 600px;
    min-height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 3rem;
    background-color: #fff;

    h1{
      text-align: center;
      font-size: 2rem;
      font-weight: 600;
    }

    .toSignUp{
      margin-top: 20px;

      p{
        margin-bottom: 10px;
      }

      a{
        color: #000;
        font-weight: bold;
        font-size: 1.2rem;
      }

      a:hover{
        text-decoration: underline;
      }

    }
  }
  
  form {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-top: 40px;

    .googleLogin{
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #00B4D8;
      border: none;
      color: #fff;
      padding: 15px;
      cursor: pointer;

      svg{
        margin-right: 10px;
        border: 1px solid #fff;
        border-radius: 50%;
        padding: 5px;
        font-size: 2rem;
      }
    }

    .loginBtn{
      margin-top: 50px;
    }
  
  }

  a, a:visited {
      color: #fff;
  }

  input[type="text"],
  input[type="password"],
  button,
  textarea {
    font-family: 'Nunito', sans-serif;
    font-size: 22px;
    padding: 0.75rem;
    border-radius: 0.5rem;
    border: 1px solid gray;
    margin-bottom: 20px;
  }

  label{
    margin-bottom: 20px;
    font-size: 1.2rem;
  }




  .instructions {
      font-size: 0.75rem;
      border-radius: 0.5rem;
      background: #000;
      color: #fff;
      padding: 0.25rem;
      position: relative;
      bottom: -10px;
  }

  .instructions > svg {
      margin-right: 0.25rem;
  }

  .offscreen {
      position: absolute;
      left: -9999px;
  }

  .hide {
      display: none;
  }

  .valid {
      color: limegreen;
      margin-left: 0.25rem;
  }

  .invalid {
      color: red;
      margin-left: 0.25rem;
  }

  .errmsg {
      background-color: lightpink;
      color: firebrick;
      font-weight: bold;
      padding: 0.5rem;
      margin-bottom: 0.5rem;
  }

  .line {
      display: inline-block;
  }
`;