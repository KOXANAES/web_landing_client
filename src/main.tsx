import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import AuthStore from './store/AuthStore.ts'
import CardStore from './store/CardStore.ts'


interface State { 
  authStore: AuthStore,
  cardStore: CardStore
}

const authStore = new AuthStore()
const cardStore = new CardStore()

export const Context = createContext<State>({ 
  authStore,
  cardStore
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Context.Provider
      value={{authStore, cardStore}}
      
      >
        <App />
    </Context.Provider>
  </StrictMode>,
)
