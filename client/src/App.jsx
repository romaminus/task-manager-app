import './App.css'
import RootBlock from './components/RootBlock'
import { Provider } from 'react-redux'
import { store } from './redux/store'
// import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <RootBlock />
        {/* </PersistGate> */}
      </Provider>
    </>
  )
}

export default App
