import React from 'react'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Loader from './components/Loader'
import LocomotiveScroll from 'locomotive-scroll'

const scroll = new LocomotiveScroll()

const App = () => {
  return (
    <div>
      <Loader />
      <Page1 />
        <Page2 />
        <Page3 />
    </div>
  )
}

export default App