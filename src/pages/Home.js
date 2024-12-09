import About from '../components/About';
import ComplexCard from '../components/ComplexCard';
import Feedbacks from '../components/Feedbacks';
import News from '../components/News';
import Map from '../components/Map';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import comfortCardPhoto from '../assets/images/home-comfort.webp'
import westCardPhoto from '../assets/images/home-west.webp'
import guestHouseCardPhoto from '../assets/images/home-guesthouse.webp'
import newYearPhoto from '../assets/images/new-year.png'

//====================================
function Home () {
      // Scrolling Tips
    const handleClickScroll = () => {
      window.scrollTo(0, 0)
    }

  return (
    <>
    <Header/>
    <main>
      <About />

      <div className='ny-block wrapper'>
        <div className='ny'>
          <img src={newYearPhoto} className='ny-img' alt='ny'/>
          <div className='ny-info'>
            <p className='ny-info__untitle'>Акційна пропозиція </p>
            <h2 className='ny-info__title'>Новий рік - у Новому домі!</h2>
            <p className='ny-info__text'><b>-2 000$</b> на купівлю таунхауса 135 м² у WEST TOWN 12</p>
          </div>
        </div>
      </div>

      <motion.section className='complexes'
        initial={{opacity: 0, y: 100, scale: 0.9}}
        whileInView={{opacity: 1, y: 0, scale: 1}}
        transition={{duration: 0.37}}
      >
        <div className='wrapper'>
          <h2 className='main-title'>ТОП-1 на ринку таунхаусів в Івано-Франківську</h2>
          <div className='complexes-up'>
          <a href='#comfort-town' onClick={handleClickScroll}><ComplexCard header='COMFORT TOWN' location='Угорники' type='10 хв до Центру Івано-Франківська' image={comfortCardPhoto}/></a>
          <a href='#west-town' onClick={handleClickScroll}><ComplexCard header='WEST TOWN' location='Крихівці' type='10 хв до міського озера' image={westCardPhoto}/></a>
          </div>
          <h2 className='main-title bes-title'>Будуємо котеджі в самому серці Карпат для інвестиції <br/> або власного проживання</h2>
            <div className='complexes-down'>
              <a href='#fomich-guesthouses' onClick={handleClickScroll}><ComplexCard header='FOMICH RESIDENCE GUESTHOUSES' location='с.Поляниця, вул.урочище Вишні' type='ГК Bukovel' image={guestHouseCardPhoto}/></a>
            </div>
        </div>
      </motion.section>

      <motion.div className='feedbacks wrapper' id='feedbacks'
        initial={{opacity: 0, y: 100, scale: 0.9}}
        whileInView={{opacity: 1, y: 0, scale: 1}}
        transition={{duration: 0.37}}
      >
        <h2 className='main-title'>Відгуки наших клієнтів</h2>
        <Feedbacks/>
      </motion.div>
      {/* <motion.div
        initial={{opacity: 0, y: 100, scale: 0.9}}
        whileInView={{opacity: 1, y: 0, scale: 1}}
        transition={{duration: 0.37}}
      >
      <BuildingStatus/>
      </motion.div> */}
      <motion.section className='news' id='news'
        initial={{opacity: 0, y: 100, scale: 0.9}}
        whileInView={{opacity: 1, y: 0, scale: 1}}
        transition={{duration: 0.37}}
      >
        <motion.div className='wrapper'
          initial={{opacity: 0, y: 100, scale: 0.9}}
          whileInView={{opacity: 1, y: 0, scale: 1}}
          transition={{duration: 0.37}}
        >
          <h2 className='main-title box'>Новини</h2>
          <div className='news__container box' id='news'>
            <News/>
          </div>
        </motion.div>
      </motion.section>

      <Map />
    </main>
    </>
  );
}

export default Home;
