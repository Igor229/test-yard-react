import './FullPageImage.scss'

function FullPageImage (props) {
  const {image} = props

  return (
    <div className='main-block' style={{backgroundImage: `url(${image})`}}>
    </div>
  )
}

export default FullPageImage