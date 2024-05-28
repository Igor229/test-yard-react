import About from '../components/About';
import ComplexCard from '../components/ComplexCard';
import Feedbacks from '../components/Feedbacks';
import News from '../components/News';
import BuildingStatus from '../components/BuildingStatus';
import Map from '../components/Map';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import beskidCardPhoto from '../assets/images/beskid-home/home-beskid.webp'
import comfortCardPhoto from '../assets/images/beskid-home/home-comfort.webp'
import westCardPhoto from '../assets/images/beskid-home/home-west.webp'

//====================================
function Home () {

  return (
    <>
    <Header/>
    <main>
      <About />

      <motion.section className='complexes'
        initial={{opacity: 0, y: 100, scale: 0.9}}
        whileInView={{opacity: 1, y: 0, scale: 1}}
        transition={{duration: 0.37}}
      >
        <div className='wrapper'>
          <h2 className='main-title'>ТОП-1 на ринку таунхаусів та малоповерхової забудови в Івано-Франківську</h2>
          <div className='complexes-up'>
          <ComplexCard header='COMFORT TOWN' location='Угорники' type='10 хв до Центру Івано-Франківська' image={comfortCardPhoto}/>
            <ComplexCard header='WEST TOWN' location='Крихівці' type='10 хв до міського озера' image={westCardPhoto}/>
          </div>
          <h2 className='main-title'>Будуємо котеджі в самому серці Карпат для інвестиції або власного проживання</h2>
            <div className='complexes-down'>
              <ComplexCard header='BESKID HOME RESORT' location='с.Поляниця, вул.урочище Вишні' type='ГК Bukovel' image={beskidCardPhoto}/>
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
      <motion.div
        initial={{opacity: 0, y: 100, scale: 0.9}}
        whileInView={{opacity: 1, y: 0, scale: 1}}
        transition={{duration: 0.37}}
      >
      <BuildingStatus/>
      </motion.div>
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
