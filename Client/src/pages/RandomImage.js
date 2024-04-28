import React, { useState } from 'react'

const RandomImage = () => {

    const [formData, setFormData] = useState( { text:""} )


    const changeHandler = (event) => {
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
          ))
    }

    function submitHandler(event){
        event.preventDefault();
        console.log("Finally printing the entireform ka data...")
        console.log(formData)
      }

  return (
    <div className=' h-[100vh] bg-gradient-to-r from-[#132c56] to-[#330530]'>

            <div className='w-11/12 max-w-[700px] mx-auto py-2' >

                <div>

                        <div className='flex flex-col gap-6 bg-white mt-8 px-10 py-5 rounded-lg shadow-md shadow-white '>
                           
                           <div className='text-center'>
                            <p className='text-4xl text-gray-400 font-bold'>Welcome</p>
                            <p>Enter the Promt</p>
                           </div>

                            <div>

                                <label htmlFor='text' className=' text-lg text-black'> <span className='text-red-500'>*</span> Enter the specification of Image You want</label>

                                <textarea cols='10' rows='7' name='text' onChange={changeHandler} value={formData.text} className='border border-black w-[100%] px-2 py-2 rounded-xl' placeholder='Enter text Here '>

                                </textarea>


                            </div>                                           

                            <div>
                                <button type="button" onClick={submitHandler} className="text-white bg-gradient-to-r from-pink-600 to-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-[1.5rem] text-lg px-5 py-4 text-center me-2 mb-2 hover:shadow-[0px_0px_15px_rgba(18,_245,_255,_0.3)] hover:bg-gradient-to-l transition-all w-[100%] mx-auto text-[2rem]">
                                    submit
                                </button>
                            </div>
                        </div>

        

                </div>

            </div>

            <div className='w-11/12 max-w-[700px] mx-auto'>

                <div className='min-w-[50%] min-h-[50%] bg-white'>

                </div>
                
                <div>
                    <button>Download</button>
                </div>

            </div>

    </div>
  )
}

export default RandomImage
