import { createUseStyles } from 'react-jss'
// import RightSideBarImgDesktop from '../../res/images/RigthSideBarImg/RightSideBarImgDesktop.png'
// import RightSideBarImgTablet from '../../res/images/RigthSideBarImg/RightSideBarImgTablet.png'

const useStyles = createUseStyles({
  containerSideBar: {
    position: 'relative',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#F0F1F3',
    '@media screen and (max-width: 1279px) and (min-width: 768px)': {
      // backgroundImage: `url(${RightSideBarImgTablet})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
    },
    '@media (min-width: 1280px)': {
      // backgroundImage: `url(${RightSideBarImgDesktop})`,
      backgroundPosition: 'right',
      backgroundRepeat: 'no-repeat',
      height: 850,
      width: 624,
    },
  },
})

export default function ContainerSideBar({ children }) {
  const styless = useStyles()
  return <div className={styless.containerSideBar}>{children}</div>
}
