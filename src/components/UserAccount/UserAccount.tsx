import './UserAccount.scss'
import { observer } from "mobx-react-lite"
import { useContext } from 'react'
import { Context } from '../../main'
import Avatar from '../avatar/Avatar'

function Acc() {
  const {authStore} = useContext(Context)

  return (
    <div className='acc'>
          <div className='acc_profile'>
            <Avatar/>
            <button onClick={() => authStore.logout()}>Выйти</button>
          </div>
          <div className='acc_options'>
            234
          </div>
        </div>
  )
}
  
export default observer(Acc)