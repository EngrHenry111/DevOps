import './Hero.css'
import arrow_icon from '../../assets/arrow1.png'
import play_icon from '../../assets/play_icon.jpg'
import pause_icon from '../../assets/pause_icon.png'


 const Hero = ({heroData, setHeroCount, heroCount, setPlayStatus,playStatus}) => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the feature  </p>
        <img src={arrow_icon} alt="" />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dot"> 
          <li onClick={()=> setHeroCount(0)} className={heroCount===0? "here-dot orange": "here-dot"}></li>
          <li onClick={()=> setHeroCount(1)} className={heroCount===1? "here-dot orange": "here-dot"}></li>
          <li onClick={()=> setHeroCount(2)} className={heroCount===2? "here-dot orange": "here-dot"}></li>
        </ul>

        <div className="hero-play">
          <img onClick={()=> setPlayStatus(!playStatus)} src={playStatus?pause_icon:play_icon} alt="" />
        <p>See the video</p>
        </div> 
      </div>

    </div>
  )
}
export default Hero