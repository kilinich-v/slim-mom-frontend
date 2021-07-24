import { createUseStyles } from 'react-jss'
import RightSideBarImgDesktop from '../../res/images/RigthSideBarImg/RightSideBarImgDesktop.png'
import RightSideBarImgTablet from '../../res/images/RigthSideBarImg/RightSideBarImgTablet.png'

const useStyles = createUseStyles({
  section: {
    backgroundColor: '#F0F1F3',
    '@media screen and (max-width: 1199px) and (min-width: 768px)': {
      backgroundImage: `url(${RightSideBarImgTablet})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
    },
    '@media (min-width: 1024px)': {
      backgroundImage: `url(${RightSideBarImgDesktop})`,
      backgroundPosition: 'right',
      backgroundRepeat: 'no-repeat',
      height: 850,
      width: 535,
    },
  },
  container: {
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    marginRight: 'auto',
    marginLeft: 'auto',
    '@media screen and (max-width: 767px) and (min-width: 320px)': {
      height: 433,
      width: 320,
    },
    '@media screen and (max-width: 1199px) and (min-width: 768px)': {
      display: 'flex',
      height: 350,
      width: 768,
      paddingLeft: 87,
      paddingRight: 39,
    },
    '@media (min-width: 1024px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  box: {
    height: 152,
    width: 290,
    paddingTop: 40,
    '@media screen and (max-width: 1199px) and (min-width: 768px)': {
      paddingTop: 91,
      paddingBottom: 91,
      width: 250,
      height: 168,
      '&:not(:last-child)': {
        marginRight: 70,
      },
    },
    '@media (min-width: 1024px)': {
      paddingLeft: 90,
      paddingRight: 115,
      '&:first-child': {
        paddingTop: 275,
        paddingBottom: 60,
      },
    },
  },
  title: {
    fontFamily: 'Verdana',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 700,
    letterSpacing: '0.04em',
    color: '#212121',
    marginBottom: 20,
    padding: 0,
    margin: 0,
    '@media (min-width: 1024px)': {
      '&:last-child': {
        marginTop: 40,
      },
    },
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: 'Verdana',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    linehHeight: 17,
    letterSpacing: '0.04em',
    listStyle: 'none',
    color: '#9B9FAA',
    '&:not(:last-child)': {
      marginBottom: 10,
    },
    '@media (min-width: 1024px)': {},
  },
  ul: {
    padding: 0,
    margin: 0,
  },
  text: {
    padding: 0,
    margin: 0,
    fontFamily: 'Verdana',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    linehHeight: 17,
    letterSpacing: '0.04em',
    color: '#9B9FAA',
  },
})

const RightSideBar = () => {
  const styless = useStyles()
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
