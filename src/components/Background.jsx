import video2 from '../assets/video2.mp4'

import './Background.css'

const Background =  () => {
    
        return(
            <video className='background'src={video2}  autoPlay loop muted />
        )
    
    
}


export default Background;