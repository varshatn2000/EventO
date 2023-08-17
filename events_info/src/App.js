import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Login'
import AddUser from './AddUser'
import AllEvents from './AllEvents'
import AddEvent from './AddEvent'
import AllUsers from './AllUsers'
import MyInvitations from './MyInvitations'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path='/AddUser' element={<AddUser/>} />
        <Route exact path='/AllEvents' element={<AllEvents/>} />
        <Route exact path='/AddEvent' element={<AddEvent/>} />
        <Route exact path='/AllUsers' element={<AllUsers/>} />
        <Route exact path='/MyInvitations' element={<MyInvitations/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
