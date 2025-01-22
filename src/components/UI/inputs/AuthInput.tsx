import { FC } from 'react';
import './Input.scss'

interface AuthInputProps { 
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder: string
	type?: string
}

const AuthInput:FC<AuthInputProps> = ({value, onChange, placeholder, type}) => { 
	return( 
		<input 
			className='authInput'
			onChange={onChange}
			value={value}
			type={type} 
			placeholder={placeholder}
		/>            
	)
}

export default AuthInput