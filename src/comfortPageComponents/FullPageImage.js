import './FullPageImage.scss'

function FullPageImage (props) {
  const {image} = props

  return (
    <div className='main-block wrapper'>
      <img src={image} className='main-block__image' alt='some image'/>
    </div>
  )
}

export default FullPageImage