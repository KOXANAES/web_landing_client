import { useState } from 'react'
import AuthForm from '../AuthForm/AuthForm'
import './NotAuthWarning.scss'

function NotAuthWarning() {
  const [chooseForm, setChooseForm] = useState<boolean>(false)

  return (
		<div className='notAuthWarning'>
			<div className='notAuthWarning_warning'>
				<h2>Кажется, вы не авторизованы! </h2>
				<p>Для работы с данным разделом приложения необходимо создать аккаунт и авторизоваться...</p>
			</div>
			
			<AuthForm chooseForm={chooseForm} setChooseForm={setChooseForm}/>
		</div>
  )
}
  
export default NotAuthWarning