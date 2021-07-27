import styless from './RightSideBar.module.scss'

const RightSideBar = () => {
  return (
    <div>
      <section className={styless.section}>
        <div className={styless.container}>
          <div className={styless.box}>
            <h3 className={styless.title}>Сводка за дату</h3>
            <ul className={styless.ul}>
              <li className={styless.list}>
                <p className={styless.ul}>Осталось</p>{' '}
                <p className={styless.ul}>000 ккал</p>
              </li>
              <li className={styless.list}>
                <p className={styless.ul}>Употреблено</p>{' '}
                <p className={styless.ul}> 000 ккал</p>
              </li>
              <li className={styless.list}>
                <p className={styless.ul}>Дневная</p>{' '}
                <p className={styless.ul}>000 ккал</p>
              </li>
              <li className={styless.list}>
                <p className={styless.ul}>n% от нормы</p>{' '}
                <p className={styless.ul}>000 ккал</p>
              </li>
            </ul>
          </div>
          <div className={styless.box}>
            <h3 className={styless.title}>Нерекомендуемые продукты</h3>
            <p className={styless.list}>Здесь будет отображаться Ваш рацион</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RightSideBar
