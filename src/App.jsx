import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom'

import Header from './components/header'
import Home from './pages/home'
import Register from './pages/register'
import Login from './pages/login'
import Tasks from './pages/taskSpace'
import NotFound from './pages/notFound'

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path='/' >
          <Home />
        </Route>
        <Route path='/register' >
          <Register />
        </Route>
        <Route path='/login' >
          <Login />
        </Route>
        <Route path='/tasks' >
          <Tasks />
        </Route>



        <Route path='/*' >
          <NotFound />
        </Route>
      </Switch>

    </BrowserRouter>
  )
}

export default App
