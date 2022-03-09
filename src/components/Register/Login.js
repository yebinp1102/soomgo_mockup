import React, { useRef, useState, useEffect } from 'react'
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styledComponents from 'styled-components';

// USER_REGEX는 반드시 소문자 혹은 대문자로 시작해야하고 4-23자
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// PWD_REGEX는 반드시 하나 이상의 소문자, 대문자, 특수 문자, 숫자를 요구하며 8-24자
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const Login = () => {
  // useRef hook을 사용하는 이유는 input에 포커스를 주기 위해서
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  // 유저명으로 적합한가.
  const [validName, setValidName] = useState(false);
  // user 인풋 필드에 포커스를 할 것인가 말것인가
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  // 성공적으로 회원가입 양식이 전송된 경우
  const [success, setSuccess] = useState(false);

  // 컴포넌트가 렌더링 되자마자, 유저명에 포커스
  useEffect(()=>{
    userRef.current.focus();
  },[])

  // 유저명이 적합한지 그렇지 않은지에 대해서 boolean 타입 값을 저장.
  // user(유저명이) 바뀔 때마다 유효성 검사를 하도록 
  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user])

  // 비번에 대한 유효성 검사
  // pwd, matchPwd를 동시에 확인하면, 둘 중 하나만 바뀌어도 유효성 검사를 실행
  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd])

  // 사용자가 user, pwd, matchPwd 중 하나만 변경해도 에러 메세지를 지운다.
  // 에러 메세지를 지우는 이유는 사용자가 user, pwd, matchPwd 중 하나라도 변경하는 시점이라면, 사용자가 이미 오류 메세지를 읽었을 것이기 때문이다.
  useEffect(() => {
    setErrMsg('');
  }, [user, pwd, matchPwd])

  const handleSubmit = async(e) => {
    e.preventDefault();
    // 만약 버튼 클릭 시 발생 할 수 있는 자바스크립트 해킹을 막음
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
  }


  return (
    <SignupWrap>
      <Container>
        {success ? (
          <section>
            <h1>Success!</h1>
            <p>
              <a href='#'>Sign In</a>
            </p>
          </section>
        ): (
        <section>
          {/* 에러 메세지가 있을 경우, 클래스명은 errmsg. 그렇지 않으면 offscreen */}
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor='username'>
              Username:
              <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
              <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
            </label>
            <input
              type="text"
              id="username"
              // input 필드에 포커스를 주기 위해 ref를 사용한다. 
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              // 유효성을 통과한 유저명일 경우 false, 통과하지 못하면 true. 이것을 사용하는 이유는 양식을 제출하기 전 해당 필드를 수정해야 하는지 사용자에게 알리기 위해서이다. 
              aria-invalid={validName ? "false" : "true"}
              // aria-describedby는 id가 uidnote인 것을 찾는다. 
              aria-describedby="uidnote"
              // 유저가 해당 input 필드에 포커스 하는 경우 true
              onFocus={() => setUserFocus(true)}
              // 유저가 해당 input 필드를 떠나는 경우
              onBlur={() => setUserFocus(false)}
            />
            {/* 클래스명은 userFocus가 true이고 user가 존재하고(=비어 있지 않은 상태)이지만 적합하지 않은 이름일 경우 instruction. 적합하면 offscreen */}
            <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
              <FontAwesomeIcon icon={faInfoCircle} />
              4 to 24 characters.<br />
              Must begin with a letter.<br />
              Letters, numbers, underscores, hyphens allowed.
            </p>

            <label htmlFor="password">
              Password:
              <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
              <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
              <FontAwesomeIcon icon={faInfoCircle} />
              8 to 24 characters.<br />
              Must include uppercase and lowercase letters, a number and a special character.<br />
              Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
            </p>

            <label htmlFor="confirm_pwd">
              Confirm Password:
              {/* validMatch도 true여야 하지만 matchPwd도 true 여야 하며 둘 다 존재하는 값이여야 한다. */}
              <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
              <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
            </label>
            <input
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first password input field.
            </p>

            {/* 3개의 필드 모두 유효성 검사를 할 떄까지 button 테그를 비활성화 */}
            <button disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
          </form>

          <p>
            Already registered?<br />
            <span className="line">
                {/*put router link here*/}
                <a href="#">Sign In</a>
            </span>
          </p>
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
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 1rem;
    background-color: #fff;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-grow: 1;
    padding-bottom: 1rem;
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
    padding: 0.25rem;
    border-radius: 0.5rem;
  }

  label,
  button {
    margin-top: 1rem;
  }

  button {
    padding: 0.5rem;
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