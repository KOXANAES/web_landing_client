import { observer } from "mobx-react-lite"
import { useContext, useState } from 'react'
import { Context } from '../../../main'
import AuthForm from '../../AuthForm/AuthForm'
import UserAccount from '../../UserAccount/UserAccount'

import './Acc.scss'

function Acc() {
  const {authStore} = useContext(Context)

  const [chooseForm, setChooseForm] = useState<boolean>(false)

  return (
    <div>
      {authStore.isAuth ? 
        <UserAccount/>    
      :
      <div className="acc_container">
        <AuthForm chooseForm={chooseForm} setChooseForm={setChooseForm}/>
      </div>
             
      }
    </div>
  )
}
  
export default observer(Acc)