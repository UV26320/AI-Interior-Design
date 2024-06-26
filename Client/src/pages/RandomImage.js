import React, { useState } from 'react';
import axios from 'axios';

const RandomImage = () => {

    const [formData, setFormData] = useState( {prompt:"", negativeprompt:""} );
    const [src, setSrc] = useState();
    const [isClicked, setIsClicked] = useState(false)
    const [loading, setLoading] = useState(false)

    const changeHandler = (event) => {
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        setLoading(true)

        const formdata = new FormData();
        formdata.append("prompt", formData.prompt);
        formdata.append("negativeprompt", formData.negativeprompt);
        
        try{    
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/predict1`, formdata);
        
            if(res?.data){
                setSrc(res?.data)
                setIsClicked(true)
            }
            else{
                console.log("Error is occured");
            }
        }
        catch(error){
            console.log(error);
        }
        setLoading(false)
      }

  return (
    <div className=' h-fit bg-gradient-to-r from-[#132c56] to-[#330530]'>

            <div className='w-11/12 max-w-[600px] mx-auto py-2' >

                <div>

                        <div className='flex flex-col gap-6 bg-white mt-8 px-10 py-5 rounded-lg shadow-md shadow-white '>
                           
                           <div className='text-center'>
                            <p className='text-4xl text-gray-400 font-bold'>Welcome To AI Designer</p>
                            {/* <p>Enter the Promt</p> */}
                           </div>


                            <div>

                            <label htmlFor='text' className=' text-lg text-black'> <span className='text-red-500'>*</span> Enter Prompt</label>

                            <textarea cols='10' rows='7' name='prompt' onChange={changeHandler} value={formData.text} className='border border-black w-[100%] px-2 py-2 rounded-xl' placeholder='Enter text Here '>

                            </textarea>

                            <label htmlFor='text' className=' text-lg text-black'> <span className='text-red-500'>*</span> Enter Negative Prompt</label>

                                <textarea cols='10' rows='7' name='negativeprompt' onChange={changeHandler} value={formData.text} className='border border-black w-[100%] px-2 py-2 rounded-xl' placeholder='Enter text Here '>

                                </textarea>


                            </div>                                           

                            <div>
                                <button type="button" onClick={submitHandler} className="text-white bg-gradient-to-r from-indigo-500 to-purple-900 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-[1.5rem] text-lg px-5 py-4 text-center me-2 mb-2 hover:shadow-[0px_0px_15px_rgba(18,_245,_255,_0.3)] hover:bg-gradient-to-l transition-all w-[100%] mx-auto text-[2rem]">
                                    submit
                                </button>
                            </div>

                            <div className='w-11/12 max-w-[700px] mx-auto '>

                                {loading && (
                                    <div className='text-center '>
                                        <h1 className='text-black text-2xl text-center'>Loading...</h1>
                                        {/* <p className='text-sm text-center'>It can take upto 2 minutes to Generate image</p> */}
                                    </div>
                                )}

                                {isClicked && !loading && (
                                    <div className='space-y-5'>
                                        <div className=' output-image '>
                                            <img src={src} alt="" className='w-[100%]'/>
                                        </div>
                                        <a href={src} download>
                                        <div className='text-center'>
                                            <button className="text-white bg-gradient-to-r from-pink-600 to-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-[1.5rem] text-lg px-5 py-4 text-center me-2 mb-2 hover:shadow-[0px_0px_15px_rgba(18,_245,_255,_0.3)] hover:bg-gradient-to-l transition-all">Download</button>
                                        </div>
                                        </a>
                                    </div>
                                )}
                            </div>

              

                        </div>

        

                </div>

               

            </div>

            

    </div>
  )
}

export default RandomImage
