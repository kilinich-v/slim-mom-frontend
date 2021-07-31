import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/registration/Operations'
import { getUserName, getIsLoggedOn } from '../../redux/registration/Selectors'

import styles from './Header.module.scss'

const UserInfo = () => {
  const name = useSelector(getUserName)
  const isAuth = useSelector(getIsLoggedOn)
  // const isAuth = 1
  // const name = 'BlaBlaBla'
  const dispatch = useDispatch()

  const onLogOut = e => {
    dispatch(logout())
  }

  return (
    <>
      {isAuth && (
        <div className={styles.userInfo}>
          <span className={styles.userLogin}> {name} </span>
          <button
            type="button"
            className={styles.exitButton}
            onClick={onLogOut}
          >
            Выйти
          </button>
        </div>
      )}
    </>
  )
}

export default UserInfo
