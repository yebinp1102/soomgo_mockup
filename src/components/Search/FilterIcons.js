import React from 'react'
import styledComponents from 'styled-components'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CottageIcon from '@mui/icons-material/Cottage';
import MicExternalOnIcon from '@mui/icons-material/MicExternalOn';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import GroupsIcon from '@mui/icons-material/Groups';
import PendingTwoToneIcon from '@mui/icons-material/PendingTwoTone';
import { Link } from 'react-router-dom';

const FilterICons = () => {
  
  return (
    <FilterIConsWrap>
      <div className='container'>

        <Link to="/search/pro/레슨" className='icon'>
          <AutoStoriesIcon fontSize='inherit' htmlColor='#03045E' />
          <p>레슨</p>
        </Link>
        <Link to="/search/pro/홈리빙" className='icon'>
          <CottageIcon fontSize='inherit' htmlColor='#03045E'/>
          <p>홈리빙</p>
        </Link>
        <Link to="/search/pro/이벤트" className='icon'>
          <MicExternalOnIcon fontSize='inherit' htmlColor='#03045E'/>
          <p>이벤트</p>
        </Link>
        <Link to="/search/pro/비즈니스" className='icon'>
          <BusinessCenterIcon fontSize='inherit' htmlColor='#03045E'/>
          <p>비즈니스</p>
        </Link>
        <Link to="/search/pro/디자인&개발" className='icon'>
          <DesignServicesIcon fontSize='inherit' htmlColor='#03045E'/>
          <p>디자인&개발</p>
        </Link>
        <Link to="/search/pro/건강&미용" className='icon'>
          <VolunteerActivismIcon fontSize='inherit' htmlColor='#03045E'/>
          <p>건강&미용</p>
        </Link>
        <Link to="/search/pro/알바" className='icon'>
          <GroupsIcon fontSize='inherit' htmlColor='#03045E'/>
          <p>알바</p>
        </Link>
        <Link to="/search/pro/기타" className='icon'>
          <PendingTwoToneIcon fontSize='inherit' htmlColor='#03045E'/>
          <p>기타</p>
        </Link>
      </div>
    </FilterIConsWrap>
  )
}

export default FilterICons

const FilterIConsWrap = styledComponents.div`
  height: 150px;
  background-color: #eee;
  margin-bottom: 100px;

  .container{
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    height: 100%;

    .icon{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 40px;
      cursor: pointer;
      transition: all .15s ease-in;
    }

    .icon:hover{
      background-color: #fff;
    }

    p{
      margin-top: 10px;
      font-size: 20px;
    }
  }
`;