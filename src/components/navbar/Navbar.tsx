import './Navbar.scss'

import logo from '../../assets/fire.png'

import { Pivot as Hamburger } from 'hamburger-react'

import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ABOUT_ROUTE, ACC_ROUTE, MAIN_ROUTE, SUPPORT_ROUTE, VERSIONS_ROUTE } from '../../router/Contst'
import { handleAppDownload } from '../logic/handleAppDownload'
import { Context } from '../../main'

function Navbar() {

  const {authStore} = useContext(Context)

  const [isOpen, setOpen] = useState(false)
  
  const onDownloadClick = () => {
    handleAppDownload(authStore);
  };

  const handleBurgerMenuClick = () => { 
    alert(isOpen)
  }

    return (
      <nav>
        <div className='nav_tileContainer'>
          <div className=' logo'>
            <NavLink to={MAIN_ROUTE}><img id='logo_img' src={logo} alt=''/></NavLink>
            <NavLink className='navbar_link' to={MAIN_ROUTE} id='logo_desc'>Embera</NavLink>
          </div>
          <div className='navbar_tile'>
            <button className='navbar_download_btn' onClick={() => onDownloadClick()}>Скачать</button>
          </div>
          <div className='navbar_tile'>
            <NavLink className='navbar_link' to={VERSIONS_ROUTE}>Обновления/Версии</NavLink>
          </div>
          <div className='navbar_tile'>
            <NavLink className='navbar_link' to={SUPPORT_ROUTE}>Поддержка</NavLink>
          </div>
          <div className='navbar_tile'>
            <NavLink className='navbar_link' to={ABOUT_ROUTE}>О проекте</NavLink>
          </div>
        </div>
        <div className='nav_tileContainer'>
          <div className='navbar_tile'>
            <NavLink className='navbar_link' to={ACC_ROUTE}>Аккаунт</NavLink>
          </div>
        </div>
        <div className="hamburger-wrapper">
          <Hamburger 
            toggled={isOpen} 
            toggle={setOpen} 
            size={27} 
            aria-label="Toggle menu"   
            onToggle={() => handleBurgerMenuClick()}
           />
        </div>
      </nav>
    )
  }
  
  export default Navbar