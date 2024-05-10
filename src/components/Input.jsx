import React from 'react'
import colorNames from 'colornames';

export default function Input({color,setColor,setHexValue,setIsDark,isDark}) {
  return (
   <>
    <form onSubmit={(e)=>e.preventDefault()}>
      <input
      className='my-3'
        autoFocus
        type='text'
        placeholder='Add Color Name'
        required
        value={color}
        onChange={(e)=>{
          setColor(e.target.value);
          setHexValue(colorNames(e.target.value))
        }}
      />
      <button
      className='btn btn-info'
       type='button'
       onClick={()=>setIsDark(!isDark)}
      >
       Toogle Text color
      </button>

    </form>
     
   </>
  )
}
