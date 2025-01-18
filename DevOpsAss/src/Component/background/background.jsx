import './background.css'
import video1 from '../../assets/video1.mp4'
import image1 from '../../assets/bac.jpg'
import image2 from '../../assets/IMG_20241226_131927_937.jpg'
import image3 from '../../assets/wrist1.jpg'

 const Background = ({playStatus, heroCount}) => {
    
 if ( playStatus) {
    return(
        <video className='background' autoPlay loop muted>
            <source src={video1} type= 'video/mp4'/>
            </video>
    )
 }
    else if ( heroCount === 0)
    {
        return <img src= {image1} className='background ' alt=''/>
    }  

    else if ( heroCount === 1)
        {
            return <img src= {image2} className='background ' alt=''/>
        }  
    
        else if ( heroCount === 2)
            {
                return <img src= {image3} className='background ' alt=''/>
            }  
}

export default Background
