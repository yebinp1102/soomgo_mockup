import React from 'react'
import styledComponents from 'styled-components'
import List from './List'

const Popular = () => {
  return (
    <>
      <Container>
        <h1 className='title'>인기 숨은고수</h1>
        <Prolist>
          <List
            img="https://i.pinimg.com/564x/c2/a9/36/c2a936e2bd16bce1bbc966ffe64e19db.jpg"
            name="한상율"
            field="현대무용 레슨"
            rate="5.0"
          />
          <List
            img="https://i.pinimg.com/564x/33/0f/90/330f90f0e86240721f04d5c030ab648c.jpg"
            name="한상율"
            field="현대무용 레슨"
            rate="5.0"
          />
          <List
            img="https://i.pinimg.com/564x/5f/40/f2/5f40f2e710b6f02dd45f2514e426c4e7.jpg"
            name="한상율"
            field="현대무용 레슨"
            rate="5.0"
          />
          <List
            img="https://i.pinimg.com/564x/7a/b4/48/7ab4485f7028a10451fdda10f399fcd8.jpg"
            name="한상율"
            field="현대무용 레슨"
            rate="5.0"
          />
          <List
            img="https://i.pinimg.com/564x/a4/94/ac/a494acef750169b4d5f8cd97f87a7285.jpg"
            name="한상율"
            field="현대무용 레슨"
            rate="5.0"
          />
          <List
            img="https://i.pinimg.com/564x/e8/da/b8/e8dab894d2a14c64c10f12fbc3e1f2c3.jpg"
            name="한상율"
            field="현대무용 레슨"
            rate="5.0"
          />
          <List
            img="https://i.pinimg.com/564x/c2/a9/36/c2a936e2bd16bce1bbc966ffe64e19db.jpg"
            name="한상율"
            field="현대무용 레슨"
            rate="5.0"
          />
          <List
            img="https://i.pinimg.com/564x/33/0f/90/330f90f0e86240721f04d5c030ab648c.jpg"
            name="한상율"
            field="현대무용 레슨"
            rate="5.0"
          />
        </Prolist>
      </Container>
    </>
  )
}

export default Popular

const Container = styledComponents.div`
  max-width: 1200px;
  margin: 100px auto 0 auto;
  
  .title{
    text-align: center;
  }
`;

const Prolist = styledComponents.div`
  display: grid;
  gap: 30px 200px;
  grid-template-columns: repeat(4, 1fr);
  padding: 50px 100px;


  img{
    width: 100%;
    border-radius: 50%;
  }
`;