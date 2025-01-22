import { observer } from "mobx-react-lite"
import { useContext, useState } from 'react'
import { Context } from '../../../main'
import PageWrapper from '../../PageWrapper/PageWrapper'
import AuthForm from '../../AuthForm/AuthForm'
import UserAccount from '../../UserAccount/UserAccount'

function Acc() {
  const {authStore} = useContext(Context)

  const [chooseForm, setChooseForm] = useState<boolean>(false)

  return (
    <PageWrapper>
      {authStore.isAuth ? 
        <UserAccount/>    
      :
        <AuthForm chooseForm={chooseForm} setChooseForm={setChooseForm}/>   
      }
    </PageWrapper>
  )
}
  
export default observer(Acc)