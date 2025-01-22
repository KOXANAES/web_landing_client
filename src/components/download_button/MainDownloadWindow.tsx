import { useContext, useEffect, useState } from 'react'
import Android from '../UI/svg/Android'
import './MainDownloadWindow.scss'
import { Context } from '../../main'
import { handleAppDownload } from '../logic/handleAppDownload'
import IOS from '../UI/svg/IOS'
import PageWrapper from '../PageWrapper/PageWrapper'

function MainDownloadWindow() {

  const {authStore} = useContext(Context)

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const handleResize = () => setIsMobile(window.innerWidth < 768);
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize)
  }, []);


  const onDownloadClick = () => {
    handleAppDownload(authStore);
  };

  const downloadOptions = [
    {
      platform: 'Android',
      version: 'Embera_android_v.1.1.0',
      icon: <Android/>,
      isDisabled: false,
    },
    {
      platform: 'iOS',
      version: 'Embera_iOS_v.1.1.0',
      icon: <IOS/>,
      isDisabled: true,
    },
  ];

  return (
    <PageWrapper>
      {downloadOptions.map((option, index) => (
        <div className='download-window__variant' key={index}>
          <p 
            className='download-window__icon' 
            onClick={() => !option.isDisabled && onDownloadClick()}
          >
            <span id='svg-logo-img'>{option.icon}</span>
            <button
              className='second_download_button' 
              disabled={option.isDisabled}
            >
              {option.platform} {option.isDisabled && isMobile ? '(в разработке) ' : ''}
            </button>
          </p>
          <p className='download-window__option'>
            <span>{option.isDisabled ? '(в разработке) ' : ''}</span>
            <button 
              className='main_download_button' 
              onClick={() => onDownloadClick()} 
              disabled={option.isDisabled}
              aria-label={`Скачать ${option.platform} версию ${option.version}`}
            >
              {option.version}
            </button>
          </p>
        </div>
      ))}
    </PageWrapper>
  );
}
  
export default MainDownloadWindow