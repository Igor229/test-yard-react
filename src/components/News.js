import { Swiper, SwiperSlide } from 'swiper/react';
import './BuildStatusSlider.css';
import './News.scss'
import { FreeMode, Autoplay } from 'swiper/modules';
import alternateTown from '../assets/images/news/alternateTown.webp'
import gasHeating from '../assets/images/news/gas-heating.webp'
import easterImg from '../assets/images/news/easter.webp'
import comfortTown from '../assets/images/news/comfortTown.webp'



function SliderCard(props) {
  
const {date, image, title, text, subtitle} = props
    return (
    <div className="news__item box">
        <img className="news__item-image" src={image} alt='news-image'/>
        <div className="news__item-info">
            <p className="news-date">{date}</p>
            <h3 className="news-title">{title}</h3>
            <h2 className="news-text">{subtitle}</h2>
            <p className="news-text">{text}</p>
        </div>
    </div>
    )
}


export default function News() {

  // cards data
  const cardData = [
    {
      image: comfortTown,
      date:'06.05.24',
      title: "НОВЕ КОТЕДЖНЕ МІСТЕЧКО ТАУНХАУСІВ від будівельної компанії YARD - COMFORT TOWN!",
      subtitle: 'Спішимо повідомити про старт продажу таунхаусів у новому котеджному містечку COMFORT TOWN!',
      text: "COMFORT TOWN - це уособлення тиші, спокою, комфорту та сімейного затишку. Містечко таунхаусів з вдалою локацією, всього 10 хвилин до Центру Івано-Франківська, а також пропонуємо НОВИНКУ - таунхауси з повністю приватним подвір'ям - передній та задній двір закритий від сусідів. Нові сучасні планування з гаражем та збільшена площа будинку - 135 м². Вже зовсім скоро ви зможете отримати більше деталей на нашій офіційній сторінці містечка COMFORT TOWN.",
    },
    {
      image: easterImg,
      date:'12.04.24',
      title: "Акція до Великодніх свят!",
      subtitle: '',
      text: "Придбайте таунхаус у містечку WEST TOWN ДО 03.05.2024 та отримайте газовий гриль У ПОДАРУНОК на власне подвір'я.",
    },
    {
      image: gasHeating,
      date:'15.11.23',
      title: "Газове опалення у BESKID HOME RESORT",
      subtitle: 'У комплексі BESKID HOME RESORT буде газове опалення!',
      text: "Газове опалення у Карпатах - це рідкість та водночас «розкіш», оскільки має багато переваг, як для власників нерухомості, так і для майбутніх мешканців: не залежить від перебоїв світла, економніше, є можливість дистанційного налаштування - smart-технології, двоконтурні котли дозволяють не тільки обігрівати будинок, але й підігрівають воду.",
    },
    {
        image: alternateTown,
        date:'10.09.23',
        title: "Таунхаус, як альтернатива квартирі - тільки краще, адже вони мають приватне подвір'я!",
        text: "Таунхаус - це відмінна альтернатива 3-кімнатній квартирі, тільки тут значною перевагою є наявність власного подвір'я, де ви зможете гратись з дітками на свіжому повітрі, пити свою ранкову каву та насолоджуватись заходами сонця чи світанком або ж влаштувати вечірку-барбекю з друзями. Наші таунхауси мають ділянку від 1,65 до 2,5 сотих.",
    },
  ]

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={false}
        pagination={false}
        autoHeight = {true}
        autoplay = {true}

        breakpoints={{
            279: {
                slidesPerView: 1,
            },
            620: {
                slidesPerView: 2,
            },
            821: {
                slidesPerView: 3,
            },
            1440: {
              slidesPerView: 4,
          },

        }}

        modules={[FreeMode, Autoplay]}
        className="buildStatusSlider"
      >
          {cardData.map((item, index) => {
            return (
            <SwiperSlide key={index}>
              <SliderCard {...item} />
            </SwiperSlide>)
          })}
      </Swiper>
    </>
  );
}
