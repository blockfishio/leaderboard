import React from 'react'

import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import WalletProvider from 'decentraland-dapps/dist/providers/WalletProvider'
import TranslationProvider from 'decentraland-dapps/dist/providers/TranslationProvider'

import './setup'

import * as locales from './modules/translation/locales'
import {
  store,
  history
} from './modules/store'
import { Routes } from './components/Routes'

import { buildContracts } from './modules/contract/utils'


import './index.css'
// import './styles/output.css'



buildContracts()

const component = (
  <Provider store={store}>
    <TranslationProvider locales={Object.keys(locales)}>
      <WalletProvider>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </WalletProvider>
    </TranslationProvider>
  </Provider>
)

ReactDOM.render(component, document.getElementById('root'))
