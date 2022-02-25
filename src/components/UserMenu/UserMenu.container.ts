import { connect } from 'react-redux'
import { getLocation, push } from 'connected-react-router'
import {
  isConnected,
  isConnecting
} from 'spacey-dapps/dist/modules/wallet/selectors'
import { RootState } from '../../modules/reducer'
import { locations } from '../../modules/routing/locations'
import { MapStateProps, MapDispatch, MapDispatchProps } from './UserMenu.types'
import UserMenu from './UserMenu'

const mapState = (state: RootState): MapStateProps => {
  return {
    isSignedIn: isConnected(state),
    isSigningIn: isConnecting(state),
    isActivity: getLocation(state).pathname === locations.activity(),
  }
}

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onClickActivity: () => dispatch(push(locations.activity())),
  onClickSettings: () => dispatch(push(locations.settings()))
})

export default connect(mapState, mapDispatch)(UserMenu)
