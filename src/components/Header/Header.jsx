import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Header.module.scss'
import BurgerMenu from './BurgerMenu/BurgerMenu'

import Navigation from './Navigation'
import { useState } from 'react'
import { useWindowWidth } from '@react-hook/window-size'
const Header = () => {
  const onlyWidth = useWindowWidth()
  const [state, setState] = useState(false)

  const setModalState = () =>
    setState(prev => ({ isModalOpen: !prev.isModalOpen }))

  const { isModalOpen } = state

  return (
    <>
      <Navigation isModalOpen={isModalOpen} setModalState={setModalState} />

      {isModalOpen && onlyWidth < 1280 ? (
        <BurgerMenu>
          <div className={styles.listBurger}>
            <div className={styles.listBurgerItem}>
              <NavLink
                className={styles.linkBurger}
                activeClassName={styles.linkActiveWhite}
                to="/diary"
                onClick={setModalState}
              >
                ДНЕВНИК
              </NavLink>
            </div>
            <div className={styles.listBurgerItem}>
              <NavLink
                className={styles.linkBurger}
                activeClassName={styles.linkActiveWhite}
                to="/calculator"
                onClick={setModalState}
              >
                КАЛЬКУЛЯТОР
              </NavLink>
            </div>
          </div>
        </BurgerMenu>
      ) : (
        ''
      )}
    </>
  )
}

export default Header
