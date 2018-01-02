import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Stories from './Stories';
import Footer from './Footer';
import './App.css';

const stories = [
  {
    img: '../public/story1.jpg',
    title: 'Why Are Fonts?',
    desc: 'They are. You\'re a font',
    authImg: '../public/louisa.png',
    authName: 'Louisa',
    estTime: '2 min'
  },
  {
    img: '../public/story2.jpg',
    title: 'Do Everything!',
    desc: 'Instantly, or even faster!',
    authImg: '../public/alternate.png',
    authName: 'Nathaniel',
    estTime: '10 min'
  },
  {
    img: '../public/story3.jpg',
    title: 'Are Fish Really Just Wet Vegetables?',
    desc: 'A deep dive into aquatic politics.',
    authImg: '../public/leta.png',
    authName: 'Leta',
    estTime: '8 min'
  },
  {
    img: '../public/story4.jpg',
    title: 'Realistic Music Titles',
    desc: 'Titles like "I\'m Sorry", "I Love You, Kinda", and "I\'M EMOTIONAL!".',
    authImg: '../public/pamela.png',
    authName: 'Pamela',
    estTime: '11 min'
  }
]

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <Stories  storiesTitle="Chart Toppers of Yesterday's Tomorrow"
                stories={stories} />
      <Stories  storiesTitle="You Know What I'm Talking About"
                stories={stories} />
      <Footer />
    </div>
  );
}

export default App;
