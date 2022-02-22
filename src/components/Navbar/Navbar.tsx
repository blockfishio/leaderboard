import React, { useCallback } from 'react'
import { Menu, Icon } from 'decentraland-ui'
import { Navbar as BaseNavbar } from 'decentraland-dapps/dist/containers'

import { locations } from '../../modules/routing/locations'
import UserMenu from '../UserMenu'
import { Props } from './Navbar.types'
import './Navbar.css'

const Navbar = (props: Props) => {
  const { pathname,  onNavigate, isConnected } = props

  if (isConnected) {
    props = { ...props, rightMenu: <UserMenu /> }
  }

  const handleOnSignIn = useCallback(() => {
    onNavigate(locations.signIn())
  }, [onNavigate])

  const handleOnClickAccount = useCallback(() => {
    onNavigate(locations.settings())
  }, [onNavigate])

  const handleClickActivity = useCallback(() => {
    onNavigate(locations.activity())
  }, [onNavigate])

  return (
    <BaseNavbar
      {...props}
      activePage="dao"
      isFullscreen={props.isFullscreen}
      isSignIn={pathname === locations.signIn()}
      onSignIn={handleOnSignIn}
      onClickAccount={handleOnClickAccount}
      middleMenu={
        <Menu.Item
          className={pathname === locations.activity() ? 'active' : ''}
        >
          <Icon
            className=""
            name="bell"
            onClick={handleClickActivity}
          />
        </Menu.Item>
      }
    />
  )
}

export default React.memo(Navbar)
