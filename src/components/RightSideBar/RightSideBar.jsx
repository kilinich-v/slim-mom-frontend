import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import DayInfo from './DayInfo'
import {
  diaryInfo,
  deprecatedProducts,
} from '../../redux/product/product-selectors'
import styless from './RightSideBar.module.scss'

function RightSideBar() {
  //  TODO new file

  const dayInfo = useSelector(diaryInfo)
  const prohibitedProducts = useSelector(deprecatedProducts)

  const [deprecated, setDeprecated] = useState([])
  const [info, setInfo] = useState(0)

  useEffect(() => {
    if (dayInfo) {
      setInfo(dayInfo)
    }
  }, [dayInfo])

  useEffect(() => {
    if (prohibitedProducts) {
      setDeprecated(prohibitedProducts)
    }
  }, [prohibitedProducts])

  return (
    <div>
      <section className={styless.section}>
        <div className={styless.container}>
          <div className={styless.box}>
            <h3 className={styless.title}>Сводка за дату</h3>
            <DayInfo info={info} />
          </div>
          <div className={styless.box}>
            <h3 className={styless.title}>Нерекомендуемые продукты</h3>
            <p className={styless.list}>Здесь будет отображаться Ваш рацион</p>
            {/* {info.products.map(product => product.title).join(', ')}  */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default RightSideBar
