import React, { useCallback } from 'react'
import { Menu, Icon } from 'spacey-ui'
import { Navbar as BaseNavbar } from 'spacey-dapps/dist/containers'
import { locations } from '../../modules/routing/locations'
import Logo from '../../images/SpaceYLogo_navber.svg'
import UserMenu from '../UserMenu'
import { Props } from './Navbar.types'
import './Navbar.css'

const Navbar = (props: Props) => {
  const { pathname, onNavigate, isConnected } = props

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
    <div className='dcl navbar fullscreen'>
      <div className=' ui container'>
        <div><a href="https://spacey2025.com"><img src={Logo} alt="" /></a></div>
        <div className='dcl navbar-menu'>
          <div className='ui secondary stackable menu '>
            <a href="" className='item'><span>Home</span></a>
            <a href="" className='item'><span>MarketPlace</span></a>
            <a href="" className='item'><span>Get STARTED</span></a>
            <a href="" className='item'><span>GET SPAY</span></a>
            <a href="" className='item'><span>LEADERBOARD</span></a>
            <a href="" className='item'><span>INFO</span></a>
          </div>
        </div>
        <div className='dcl navbar-account'>
          <div className='ui secondary menu'>
            <a className='item sign-in-button'>SIGN IN</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Navbar)
