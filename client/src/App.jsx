import './App.css'
import RootBlock from './components/RootBlock'
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
  return (
    <>
      <Provider store={store}>
          <RootBlock />
      </Provider>
    </>
  )
}

export default App
