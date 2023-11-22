import './AdventageBox.scss'

function AdventageBox (props) {
    const {adventageNum, text} = props

    return (
        <div className='adventage-box'>
            <h2 className='adventage-box__num'>{adventageNum}</h2>
            <p className='adventage-box__text'>{text}</p>
        </div>
    )
}

const adventageData = [
    {
      adventageNum: '01',
      text: 'Досвідчена керуюча компанія Fomich Hotels Group'
    },
    {
      adventageNum: '02',
      text: 'Пасивний дохід без зайвих клопотів'
    },
    {
      adventageNum: '03',
      text: 'Розташування в 5 хв від ГК Bukovel'
    },
    {adventageNum: '04',
      text: 'Введення в експлуатацію - літо 2024 року'
    },
  ]

function Adventages () {
      return (
        adventageData.map((item, index) => {
          return (
            <AdventageBox key={index} {...item} />
          )
        })
      )

}

export default Adventages