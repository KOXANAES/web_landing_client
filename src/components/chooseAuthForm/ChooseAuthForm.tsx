import { FC } from 'react';
import './ChooseAuthForm.scss'
import { observer } from 'mobx-react-lite';

interface AuthFormProps { 
    chooseForm: boolean;
    setChooseForm: React.Dispatch<React.SetStateAction<boolean>>;
  }

const ChooseAuthForm:FC<AuthFormProps> = ({chooseForm, setChooseForm}) => { 
    
    const handleLoginClick = () => setChooseForm(false)
    const handleRegisterClick = () => setChooseForm(true);
    
    return( 
      <div className='chooseForm'>
        <button 
          id='chooseForm_login-btn'
          className={chooseForm ? 'chooseAuthForm-btn  ' : 'chooseAuthForm-btn chooseAuthForm-btn-active'}
          onClick={handleLoginClick}>
            Логин
        </button>
        <button 
          id='chooseForm_reg-btn'
          className={chooseForm ? 'chooseAuthForm-btn chooseAuthForm-btn-active' : 'chooseAuthForm-btn '}
          onClick={handleRegisterClick}>
            Регистрация
        </button>
      </div>         
    )
}

export default observer(ChooseAuthForm)