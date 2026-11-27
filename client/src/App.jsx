import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Counter from './components/Counter'
import UserInput from './components/UserInput'

const App = () => {
  
  return (
    <>
      <Navbar/>
      <div className="flex">
        <Sidebar/>
        <Dashboard/>
        <Counter/>
        <UserInput/>
      </div>
      <Footer/>
      <Login/>

    </>
  );
};

export default App;