import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import AuthStore from './store/AuthStore.ts'


interface State { 
  authStore: AuthStore
}

const authStore = new AuthStore()

export const Context = createContext<State>({ 
  authStore
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Context.Provider
      value={{authStore}}
      
      >
        <App />
    </Context.Provider>
  </StrictMode>,
)
