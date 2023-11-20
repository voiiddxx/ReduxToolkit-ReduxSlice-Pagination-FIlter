import React from 'react'
import Home from './View/Home/Home'
import {Provider} from "react-redux"
import store from './store/index'

const App = () => {
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  )
}

export default App
