import { useState, useEffect } from 'react'
import { useSelector} from 'react-redux'
import DayInfo from './DayInfo'
import { fetchDayInfo } from './apiServer/apiServer'
import styless from './RightSideBar.module.scss'

function RightSideBar() {
  const [info, setInfo] = useState('000')

  useEffect(() => {
    const dayData = '2021-07-29'
    fetchDayInfo(dayData)
      .then(data => setInfo(data))
      .catch(error => console.log(error))
  }, [])

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
