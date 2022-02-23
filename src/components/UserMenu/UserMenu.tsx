import React from 'react'
import { UserMenu as BaseUserMenu } from 'spacey-dapps/dist/containers'

export default class UserMenu extends React.PureComponent {
  render() {
    return <BaseUserMenu {...this.props} />
  }
}
