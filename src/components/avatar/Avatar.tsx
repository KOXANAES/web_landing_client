import { observer } from 'mobx-react-lite';
import { Context } from '../../main';
import { useContext } from 'react';


function Avatar() {

  const { authStore } = useContext(Context);
  
  const avatarUrl = authStore.user?.avatar ? `${import.meta.env.VITE_API_URL}/${authStore.user.avatar}` : null;
  const defaultAvatarUrl = `${import.meta.env.VITE_API_URL}/${import.meta.env.VITE_DEFAULT_AVATAR_PATH}`;
  
  return (
    <div style={{margin: '5px'}}>
      {avatarUrl ? (
        <img src={avatarUrl} alt="User Avatar" style={{ width: '50px', height: '50px' }} />
      ) : (
        <img src={defaultAvatarUrl} alt="Default Avatar" style={{ width: '50px', height: '50px' }} />
      )}
    </div>
  );
}

export default observer(Avatar);