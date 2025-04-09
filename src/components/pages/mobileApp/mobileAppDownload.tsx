import MainDownloadWindow from "../../download_button/MainDownloadWindow"
import logo from '@/assets/fire.png'

const MobileAppDnldPage = () => { 

  return( 
    <div>
      <main>
      <div className='main__logo'>
        <img src={logo} id='main__logo-img' alt=''></img>
      </div>
      <div className='main__description'>
        <p id='main__version'>v. 1.0.0. от 11 Января</p>
        <p id='main__project-name'>Embera</p>
      </div>
    </main>
    <MainDownloadWindow/>
    </div>
  )
}

export default MobileAppDnldPage