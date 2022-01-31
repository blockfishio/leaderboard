import { Dispatch } from 'redux'
import { fetchVotingpowerRequest, FetchVotingpowerRequestAction } from '../../modules/vote/actions'

import { Wallet } from 'decentraland-dapps/dist/modules/wallet/types'
import { CallHistoryMethodAction } from 'connected-react-router'
import { VotingPower } from '../../modules/vote/reducer'
export type Props = {
    wallet: Wallet | null
    onNavigate: (path: string) => void
    onFetchUserVotingpower:typeof fetchVotingpowerRequest
    onRedirect: (path: string) => void

    votingpower:VotingPower[] | null
    isLoading: boolean
    isConnecting: boolean
}

export type MapStateProps = Pick<
    Props,
    'isLoading' | 'wallet' | 'isConnecting' | 'votingpower' 
>
export type MapDispatchProps = Pick<Props, 'onNavigate'| 'onFetchUserVotingpower' | 'onRedirect'>
export type MapDispatch = Dispatch<
     CallHistoryMethodAction | FetchVotingpowerRequestAction
>
