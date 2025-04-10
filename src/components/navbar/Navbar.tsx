import './Navbar.scss'

import logo from '../../assets/fire.png'

import { Pivot as Hamburger } from 'hamburger-react'

import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ABOUT_ROUTE, ACC_ROUTE, MAIN_ROUTE, MOBILE_APP_ROUTE, PPR_ROUTE, SUPPORT_ROUTE, VERSIONS_ROUTE } from '../../router/Contst'
import { Context } from '../../main'

function Navbar() {

  const {authStore} = useContext(Context)

  const [isOpen, setOpen] = useState(false)

  const handleBurgerMenuClick = () => { 
    // there will be logic
  }

  const navItems = [
    { route: PPR_ROUTE, label: 'ППР' },
    { route: MOBILE_APP_ROUTE, label: 'Мобильное приложение' },
    { route: VERSIONS_ROUTE, label: 'Обновления/Версии' },
    { route: SUPPORT_ROUTE, label: 'Поддержка' },
    { route: ABOUT_ROUTE, label: 'О проекте' },
];

    return (
      <nav>
        <div className='nav_tileContainer'>
          <div className='logo'>
            <NavLink to={MAIN_ROUTE}><img id='logo_img' src={logo} alt=''/></NavLink>
            <NavLink className='navbar_link' to={MAIN_ROUTE} id='logo_desc'>Embera</NavLink>
          </div>
          {navItems.map((item, index) => (
                <div className="navbar_tile" key={index}>
                    <NavLink className={({ isActive }) => (isActive ? 'navbar_link active' : 'navbar_link')} to={item.route} >
                        {item.label}
                    </NavLink>
                </div>
            ))}
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
        {isOpen ? 
          <div className='dropd_mobmenu'>  
            <div className='dropd_mobmenu_mainmenu'>
              {navItems.map((item, index) => (
                  <div className="dropdown_menu_tile" key={index}>
                      <NavLink className="navbar_link" to={item.route}>
                          {item.label}
                      </NavLink>
                  </div>
              ))}
            </div>
          </div> 
          :
          <></>
        }
        
      </nav>
    )
  }
  
  export default Navbar