
import { useState } from 'react';
import './App.css'
import Square from './components/Square';
import Input from './components/Input';

function App() {
  const [color,setColor]= useState('')
  const [hexValue,setHexValue] =useState('')
  const [isDark,setIsDark]= useState(true)

  return (
    <>
     <div>
       <Square
       color ={color} 
       hexValue={hexValue}
       isDark ={isDark}
       />
       <Input 
         color = {color}
         setColor= {setColor}
         setHexValue= {setHexValue}
         setIsDark ={setIsDark}
         isDark={isDark}
       />
     </div>
     
    </>
  )
}

export default App;
