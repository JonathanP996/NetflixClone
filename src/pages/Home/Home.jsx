import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import HeroImg from '../../assets/hero_banner.jpg'
import HeroTitle from '../../assets/hero_title.png'
import PlayIcon from '../../assets/Play_icon.png'
import InfoIcon from '../../assets/info_icon.png'
import TitleCards from '../../components/Titlebar/Titlebar'


const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className='hero'>
        <img src={HeroImg} alt="" className="banner-img"/>
        <div className="hero-caption">
          <img src={HeroTitle} alt='' className="caption-img"/>
          <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save teh city from an immortal enemy.</p>
          <div className="hero-btns">
            <button className='btn'><img src={PlayIcon} alt=""/> Play </button>
            <button className='btn dark-btn'><img src={InfoIcon} alt=""/> More Info</button>
          </div>
          <TitleCards/>
          </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Critically Acclaimed"} category={"top_rated"}/>
        <TitleCards title={"Only on Netflix"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top Pics for You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
