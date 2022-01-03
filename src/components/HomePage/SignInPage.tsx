import React from 'react'
import { Page } from 'decentraland-ui'

import { Navbar } from '../Navbar'
import { Footer } from '../Footer'
import './SignInPage.css'

const HomePage = () => {
  return (
    <>
      <Navbar isFullscreen />
      <Page className="SignInPage" isFullscreen>
      </Page>
      <Footer isFullscreen />
    </>
  )
}

export default React.memo(HomePage)
