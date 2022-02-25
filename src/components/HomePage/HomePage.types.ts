import { Dispatch } from 'redux'

// import { Proposal } from '../../modules/proposal/types'
// import {
//     fetchProposalsRequest,
//     FetchProposalsRequestAction,
// } from '../../modules/proposal/actions'
import { Wallet } from 'spacey-dapps/dist/modules/wallet/types'
import { CallHistoryMethodAction } from 'connected-react-router'
export type Props = {
    wallet: Wallet | null

    onNavigate: (path: string) => void

    // isLoading: boolean
    // isConnecting: boolean
}

export type MapStateProps = Pick<Props, 'wallet'>
export type MapDispatchProps = Pick<Props, 'onNavigate'>
export type MapDispatch = Dispatch<CallHistoryMethodAction>
