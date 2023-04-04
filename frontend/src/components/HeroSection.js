import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from './pages/Header';
import { Button } from "../styles/Button";

const HeroSection = ({ myData }) => {
  const { name } = myData;

  return <Wrapper>
    <Header />
    <div className='container'>
      <div className='grid grid-two-column'>
        <div className='hero-section-data'>
          <p className='intro-data'>Welcome to</p>
          <h1>{name}</h1>
          <p>here you can find all your favorite products in one
            place! We offer a wide selection of high-quality products at competitive prices, from
            fashion. Our easy-to-use website makes it simple to find what you're looking for,
            whether you're browsing by category or searching for a specific
            item. Plus, with our secure checkout process, you can shop with confidence and enjoy fast,
            Start exploring our vast selection today and discover the perfect products
            for you!"</p>
          <NavLink>
            <Button >show now</Button>
          </NavLink>

        </div>
        <div className='hero-section-image'>
          <figure>
            <img src='images/hero.jpg' alt='hero-section-photo' className='img-style' />
          </figure>

        </div>

      </div>

    </div>

  </Wrapper>
};
const Wrapper = styled.section`
// padding:12rem 0;

img{
  min-width:10rem;
  height:10rem;
}
.container {
  max-width: 120rem;
  margin: 0 auto;
}
.grid {
  display: grid;
  gap: 9rem;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);

}

.hero-section-data {
p{
  margin:2rem 0;
}
h1 {
  text-transform:capitalize;
  font-weight:bold;
}
.intro-data {
  margin-bottom:0;
}
}
.hero-section-image{
  width:100%;
  height:auto;
  display:flex;
  justify-content:center;
  align-items:center;
}
figure {
  position:relative;

  &::after {
    content: "";
    width: 60%;
    height: 80%;
    background-color: rgba(81, 56, 238, 0.4);
    position: absolute;
    left: 50%;
    top: -5rem;
    z-index: -1;
  }
}
.img-style {
  width:100%;
  height:auto;
}


  figure::after{
    content:"";
    width:50%;
    height:100%;
    left:0;
    top:10%;
    background-color:rgba(81,56,238,0.4);
  }

`;

export default HeroSection
