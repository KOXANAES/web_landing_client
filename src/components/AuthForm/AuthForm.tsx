import { FC, useContext, useState } from 'react';
import './AuthForm.scss'
import { observer } from 'mobx-react-lite';
import AuthInput from '../UI/inputs/AuthInput';
import { Context } from '../../main';
import ChooseAuthForm from '../chooseAuthForm/ChooseAuthForm';

interface AuthFormProps { 
  chooseForm: boolean;
  setChooseForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthForm:FC<AuthFormProps> = ({chooseForm, setChooseForm}) => { 

    const {authStore} = useContext(Context)

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [username, setUsername] = useState<string>('')

    return( 
      <div className='authForm'>
      <ChooseAuthForm chooseForm={chooseForm} setChooseForm={setChooseForm}/>
      <div className='form_input_wrapper'> 
        <div className='form_input_select_form'>
          {chooseForm ? 
            <> 
              <AuthInput
                onChange={e => setEmail(e.target.value)}
                value={email}
                type='text' 
                placeholder='Email'
              />
              <AuthInput
                onChange={e => setPassword(e.target.value)}
                value={password}
                type='password' 
                placeholder='Пароль'
              />
              <AuthInput
                onChange={e => setUsername(e.target.value)}
                value={username}
                type='text' 
                placeholder='Ваше имя'
              />
              <p>{authStore.isAuth ? 'Добро пожаловать!' : 'Войтите в аккаунт' }</p>
            </>
          : 
            <> 
              <AuthInput
                onChange={e => setEmail(e.target.value)}
                value={email}
                type='text' 
                placeholder='Email'
              />
              <AuthInput
                onChange={e => setPassword(e.target.value)}
                value={password}
                type='password' 
                placeholder='Пароль'
              />
          </>
          }
        </div>
        <div className='form_input_description'>
          123
        </div>
      </div>
      {chooseForm ?
        <button className='orange-btn' onClick={() => authStore.registration(email, password, username)}>Регистрация</button>
      : 
        <button className='orange-btn' onClick={() => authStore.login(email, password)}>Логин</button>
      }
    </div>   
    )
}

export default observer(AuthForm)