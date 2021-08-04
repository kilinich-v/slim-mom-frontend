import styless from './s.module.scss'

const DayInfo = ({info}) => {
    return(
        <ul className={styless.ul}>
        <li className={styless.list}>
        <p className={styless.ul}>Осталось</p>{' '}
        <p className={styless.ul}>{info.kcalRemain } ккал</p>
      </li>
      <li className={styless.list}>
        <p className={styless.ul}>Употреблено</p>{' '}
        <p className={styless.ul}>{info.totalKcalPerDay} ккал</p>
      </li>
      <li className={styless.list}>
        <p className={styless.ul}>Дневная норма</p>{' '}
        <p className={styless.ul}>{info.dayNorm} ккал</p>
      </li>
      <li className={styless.list}>
        <p className={styless.ul}>n% от нормы</p>{' '}
        <p className={styless.ul}>{info.percentage} % ккал</p>
      </li>
      </ul>
    )
   
}

export default DayInfo