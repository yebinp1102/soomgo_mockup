import { Link } from 'react-router-dom'
import React from 'react'
import styledComponents from 'styled-components'
import SuggestCard from './SuggestCard'

const FilterSuggest = () => {
  return (
    <FilterWrap>
      <div className='container'>
        <p>인기 서비스</p>
        <SuggestWrap>
          <Link to="/survey">
            <SuggestCard
              img="https://cdn.pixabay.com/photo/2018/02/06/14/07/ease-3134828_1280.jpg"
              title="방송 댄스"
            />
          </Link>
          <Link to="/survey">
            <SuggestCard
              img="https://cdn.pixabay.com/photo/2018/02/06/14/07/ease-3134828_1280.jpg"
              title="방송 댄스"
            />
          </Link>
          <Link to="/survey">
            <SuggestCard
              img="https://cdn.pixabay.com/photo/2018/02/06/14/07/ease-3134828_1280.jpg"
              title="방송 댄스"
            />
          </Link>
          <Link to="/survey">
            <SuggestCard
              img="https://cdn.pixabay.com/photo/2018/02/06/14/07/ease-3134828_1280.jpg"
              title="방송 댄스"
            />
          </Link>
          <Link to="/survey">
            <SuggestCard
              img="https://cdn.pixabay.com/photo/2018/02/06/14/07/ease-3134828_1280.jpg"
              title="방송 댄스"
            />
          </Link>
          <Link to="/survey">
            <SuggestCard
              img="https://cdn.pixabay.com/photo/2018/02/06/14/07/ease-3134828_1280.jpg"
              title="방송 댄스"
            />
          </Link>
          <Link to="/survey">
            <SuggestCard
              img="https://cdn.pixabay.com/photo/2018/02/06/14/07/ease-3134828_1280.jpg"
              title="방송 댄스"
            />
          </Link>
          <Link to="/survey">
            <SuggestCard
              img="https://cdn.pixabay.com/photo/2018/02/06/14/07/ease-3134828_1280.jpg"
              title="방송 댄스"
            />
          </Link>
          <Link to="/survey">
            <SuggestCard
              img="https://cdn.pixabay.com/photo/2018/02/06/14/07/ease-3134828_1280.jpg"
              title="방송 댄스"
            />
          </Link>
          
        </SuggestWrap>
      </div>
    </FilterWrap>
  )
}

export default FilterSuggest

const FilterWrap = styledComponents.div`
  text-align: center;
  margin-bottom: 200px;

  p{
    font-size: 2.5rem;
    font-weight: 600;
  }
`;

const SuggestWrap = styledComponents.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;