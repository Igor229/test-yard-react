import './ManagmentGroup.scss'

const managmentData = [
    {
        manageNum: '01',
        text: 'Маркетинг',
        imgClass: 'managment__box bg-one'
    },
    {
        manageNum: '02',
        text: 'Забезпечення завантаження комплексу',
        imgClass: 'managment__box bg-two'
    },
    {
        manageNum: '03',
        text: 'Клінінгові послуги',
        imgClass: 'managment__box bg-three'
    },
    {
        manageNum: '04',
        text: 'Адміністрування та заселення',
        imgClass: 'managment__box bg-four'
    },
]

function ManageBox (props) {
    const {manageNum, text, imgClass} = props
    return (
        <div className={imgClass}>
            <div className='managment__box-info'>
                <h3 className='managment__box-number'>{manageNum}</h3>
                <p className='managment__box-text'>{text}</p>
            </div>
        </div>
    )
}

function ManagmentGroup () {
    return (
        <div className='managment'>
            {managmentData.map((item, index) => {
                return (
                    <ManageBox key={index} {...item} />
                )
            })}
        </div>
    )
}

export default ManagmentGroup