import Navbar from './components/Navbar'
import ItemsList from './components/ItemsList'
import Cart from './components/Cart'
import { useState } from 'react'
// import { Route, NavLink} from 'react-router'
import { Context } from './context/index'
// import { data } from './data'


function App() {

  return (
    <>
      <Navbar />
      <ItemsList />
      <Cart />
    </>
  )
}

export default App
