import React from 'react'
import hImage from "../Assets/Design2 bg.jpeg"
import "../../src/pages/Home.css"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-[#132c56] to-[#330530] w-full h-[100vh] flex items-center justify-center overflow-y-hidden">

      <div className=' flex flex-row  w-11/12 max-w-[1200px] mx-auto my-auto  gap-20'>

        <div className='max-w-[40%] space-y-8 '>

          <p className='text-white font-["Gabriela"] text-3xl'> Welcome to <span className="bg-gradient-to-r from-[#fbbf24] to-[#84cc16] inline-block text-transparent bg-clip-text text-4xl">AI</span> Interior Design , where innovation meets elegance to transform your <span className="bg-gradient-to-r from-[#fbbf24] to-[#84cc16] inline-block text-transparent bg-clip-text text-4xl">Living Spaces</span> </p>

          <p className='text-sm text-white'>Our cutting-edge ensures that your home reflects your unique style and personality, effortlessly blending creativity with functionality.</p>

          <button type="button" className="text-white bg-gradient-to-r from-pink-600 to-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-[1.5rem] text-lg px-5 py-4 text-center me-2 mb-2 hover:shadow-[0px_0px_15px_rgba(18,_245,_255,_0.3)] hover:bg-gradient-to-l transition-all"> <Link to="/Design-Interior-Free">Create Design</Link> </button>

        </div>

        <div className='h-fit w-fit hero-section-right border-2 border-black mt-15'>
          <img src={hImage} alt='' className='w-[100%] h-[450px] max-md:hidden img-absolute '/>
        </div>

      </div>
      
    </div>
  )
}

export default Home
