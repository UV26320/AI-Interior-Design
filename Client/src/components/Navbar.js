import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../Assets/final logo2.png"

const Navbar = () => {


  return (
    <div>
      
        <div>

            <ul className='flex flex-row bg-black items-center justify-center  py-5 gap-56'>

                <li>
                    <img src={logo} alt='' className='h-15 w-[200px]'/>
                </li>

                <li>
                    <NavLink to='/' className="text-white text-1xl font-bold hover:bg-gradient-to-r from-[#ee27e1] via-[#920589] to-[#8a0e82] hover:text-transparent hover:bg-clip-text transition-all shadow-sm " >Home</NavLink>
                   
                </li>

                <li>
                <NavLink to="/Design-Interior-Free" className="text-white text-1xl font-bold hover:bg-gradient-to-r from-[#ee27e1] via-[#920589] to-[#8a0e82] hover:text-transparent hover:bg-clip-text transition-all shadow-sm active:text-pink-600">Image-to-Image</NavLink>
                </li>

                <li>
                    <NavLink to="/Random-Image-Free" className="text-white text-1xl font-bold hover:bg-gradient-to-r from-[#ee27e1] via-[#920589] to-[#8a0e82] hover:text-transparent hover:bg-clip-text transition-all shadow-sm" >Text-to-Image</NavLink>
                </li>
                


            </ul>

        </div>


    </div>
  )
}

export default Navbar
