import { connect } from 'react-redux'
import { push, getLocation } from 'connected-react-router'

import { RootState } from '../../modules/reducer'
import { isConnected } from '../../modules/wallet/selectors'
import { MapStateProps, MapDispatch, MapDispatchProps } from './Navbar.types'
import Navbar from './Navbar'

const mapState = (state: RootState): MapStateProps => ({
  isConnected: isConnected(state),
  pathname: getLocation(state).pathname,
 
})

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onNavigate: path => dispatch(push(path))
})

export default connect(mapState, mapDispatch)(Navbar)
