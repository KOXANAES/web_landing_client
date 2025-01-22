import { FC, ReactNode } from 'react'
import './PageWrapper.scss'

interface PageWrapperProps { 
    children: ReactNode
}

const PageWrapper:FC<PageWrapperProps> = ({children}) => {

  return (
    <div className='page__wrapper'>
        <div className='page__wrapper__window'>
            {children}
        </div>
    </div>    
  )
}
  
export default PageWrapper