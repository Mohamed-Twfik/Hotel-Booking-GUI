import './App.css';
import React, {useState} from 'react'
import { createContext } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import Navebar from './components/Navbar/Navebar'
import Slider from './components/Slider/Slider'
import Rooms from './components/Rooms/Rooms'
import Footer from './components/Footer/Footer'
import Up from './components/Upbutton/Up'

export const CountContext = React.createContext(0)

function App() {
  const [count, setcount] = useState(0)
  return (
    
      <div className="App">
        <CountContext.Provider value={{count, setcount}}>
          <Navebar  id="nav"/>
          <Navebar fixed='fixed-top'/>
          <Slider/>
          <Rooms/>
          <Footer/>
          <Up/>
        </CountContext.Provider>
      </div>
    
  );


}
export default App;
