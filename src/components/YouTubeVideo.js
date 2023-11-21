import './YouTubeVideo.scss'
import instagramImage from '../assets/images/Instagram-block.png'
import instaLink from '../assets/icons/instagram-link.png'

function YouTubeVideo() {
    return (
        <div className="youtube-video box">
            <h2 className="main-title youtube-title box">Повний огляд котеджу в  нашому Instagram</h2>
            <a href='https://www.instagram.com/yard.development/' target='_blank' className='insta-link box'><img src={instaLink}/></a>
            <div className="youtube-video__container box">
                <img src={instagramImage} className='instagram-image box'/>
            </div>
        </div>
    )
}

export default YouTubeVideo