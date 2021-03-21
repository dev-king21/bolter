import React from 'react';
import MainBoard from './MainBoard'
import FeaturedBolter from './FeaturedBolter'
import BecomeABolter from './BecomeABolter';
import TrustedBy from './TrustedBy';
const HomePage=(props)=> {

  const categories=[
    {id:1,job:'Painting',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'},
    {id:2,job:'Cleaning',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'},
    {id:3,job:'Handwork',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'},
    {id:4,job:'Petsitter',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'},
    {id:5,job:'Plumbing',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'},
    {id:6,job:'Furniture Assembly',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'},
    {id:7,job:'Moving Assistance',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'},
    {id:8,job:'Gardening',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'},
]
  return (
    <div>
      <MainBoard
        categories={categories}
      />
      <FeaturedBolter
        categories={categories}
      />
      <BecomeABolter
        categories={categories}
      />
      <TrustedBy/>
    </div>
  );
}

export default HomePage;