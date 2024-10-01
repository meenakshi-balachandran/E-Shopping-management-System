
import './App.css'
import { AppContextProvider } from './context/AppContext'
import Router from './router/Router'

function App() {

  return (
    <>
    <AppContextProvider>
    <Router />
    </AppContextProvider>
    </>
  )
}

export default App
