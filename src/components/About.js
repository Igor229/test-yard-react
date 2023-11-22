import './About.scss'
import MainVideoBGQuality from '../assets/videos/main-video.MP4'

function About () {
    return (
        <section className="about" id="main-container">
            <div className='video-container'>
                <video src={MainVideoBGQuality} poster typeof='video/mp4' className='main-video' autoPlay playsInline loop muted/>
                <div className='text-container  box'>
                    <div className='wrapper'>
                        <h1 className='text-container__title box'>Yard Development</h1>
                        <p className='text-container__text box'>
                            Будуємо котеджне містечко таунхаусів у <br/> Крихівцях - WEST TOWN 
                            та комплекс BESKID <br/> HOME RESORT у Буковелі.
                        </p>

                        <div className='text-container__actions box'>
                            <a href='#beskid-home'><button className='about-button main-button box'>Beskid Home Resort</button></a>
                            <a href='#west-town'><button className='about-button main-button active-button box'>West Town</button></a>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    )
}

export default About