import React, { useState } from 'react'
import "../pages/Design.css"

const Design = () => {

    const [formData, setFormData] = useState( {roomType:"", typeDesign:"", text:"", image:""} )


    const changeHandler = (event) => {
        if(event.target.name !== 'image'){
            setFormData((prevData)=>(
                {
                    ...prevData,
                    [event.target.name]:event.target.value
                }
              ))
        }
        else{
            setFormData((prevData)=>(
                {
                    ...prevData,
                    [event.target.name]:event.target.files[0]
                }
              ))
        } 
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
                                <label htmlFor="roomType" className=' text-black'> <span className='text-red-500 '>*</span> Choose Your Room type</label>

                                <select htmlFor='roomType' name='roomType' size='1' onChange={changeHandler} value={formData.roomType} className='border border-black w-[100%] px-2 py-2 rounded-xl' >

                                    <option value="livingRoom">Living Room</option>
                                    <option value="classRoome">Class Room</option>
                                    <option value="diningRoom">Dining Room</option>
                                    <option value="bedroom">Bedroom</option>
                                    <option value="gammingRoom">Gamming room</option>
                                    <option value="bathroom">Bathroom</option>
                                    <option value="office">Office</option>
                                    <option value="kitchen">Kitchen</option>
                                    <option value="guestRoom">Guest Room</option>
                                    <option value="laundryRoom">Laundry Room</option>
                                    <option value="hometheater">HomeTheater</option>
                                    <option value="playroom">Playroom</option>
                                    <option value="mucicRoom">Mucic Room</option>
                                    <option value="sunroom">SunRoom</option>
                                    <option value="garage">Garage</option>
                                    <option value="poolRoom">Pool Room</option>
                                    <option value="studyRoom" >Study Room</option>
                                    <option value="exerciseRoom" >Exercise Room</option>
                                    <option value="pantry">Pantry</option>
                                    <option value="basement" >Basement</option>
                                    <option value="homeOffice" >Home Office</option>
                                    <option value="outdoorGardern" >Outdoor Garden</option>
                                    <option value="coffeeShope" >Coffee Shope</option>
                                    <option value="clothingStore" >Clothing Store</option>
                                    <option value="hotelRoom" >Hotel Room</option>
                                    <option value="hotel Bathroom" >Hotel Bathroom</option>
                                    <option value="exhibitionSpace" >Exhibition Space</option>
                                    <option value="hotelLobby" >Hotel Lobby</option>

                                </select>
                            </div>

                            <div>

                                <label htmlFor="typeDesign" className=' text-lg text-black'> <span className='text-red-500'>*</span> Choose your home design or architect.</label>

                                <select id='typeDesign' name='typeDesign' onChange={changeHandler} value={formData.typeDesign} size='1' className='border border-black w-[100%] px-2 py-2 rounded-xl' >

                                    <option value="modern">Modern</option>
                                    <option value="minalist">Minalist</option>
                                    <option value="industrial">Industrial</option>
                                    <option value="scandinavian">Scandinavian</option>
                                    <option value="rustic">Rustic</option>
                                    <option value="bohemian">Bohemian</option>
                                    <option value="coastal">Coastal</option>
                                    <option value="farmhouse">Farmhouse</option>
                                    <option value="mid-century modern">Mid-Century Modern</option>
                                    <option value="traditional">Traditional</option>
                                    <option value="transitional">Transitional</option>
                                    <option value="eclectic">Electic</option>
                                    <option value="contemporary">Contemporary</option>
                                    <option value="gothic">Gothic</option>
                                    <option value="victorian">Victorian</option>
                                    <option value="art Deco">Art Deco</option>
                                    <option value="art nouveau">Art Nouveau</option>
                                    <option value="shabby chic">Shabby Chic</option>
                                    <option value="japanese">Japanese</option>
                                    <option value="chinese">Chinese</option>
                                    <option value="mediterranean">Mediterranean</option>
                                    <option value="tropical">Tropical</option>
                                    <option value="moroccan">Moroccan</option>
                                    <option value="indian">Indian</option>
                                    <option value="urban">Urban</option>
                                    <option value="futuristic">Futuristic</option>
                                    <option value="sci-fi">Sci-fi</option>
                                    <option value="jungle">Jungle</option>
                                    <option value="desert">Desert</option>
                                    <option value="arctic">Arctic</option>
                                    <option value="western">Western</option>
                                    <option value="zen">Zen</option>

                                </select>

                            </div>

                            <div>

                                <label htmlFor='text' className=' text-lg text-black'> <span className='text-red-500'>*</span> Enter the specification of Image You want</label>

                                <textarea cols='10' rows='7' name='text' onChange={changeHandler} value={formData.text} className='border border-black w-[100%] px-2 py-2 rounded-xl' placeholder='Enter text Here '>

                                </textarea>


                            </div>                

                            <div>

                                <label htmlFor="image" className='text-lg text-black custom-file-upload '>
                                    {formData.image ? formData.image.name : "Upload Image"}
                                
                                    <input type="file" id="image" name="image" accept="image/*" onChange={changeHandler} className=''/>
                                    

                                </label>
                                <br/>
                                <span>(Note:- Upload the image you want to design using AI Interior IQ.)</span>
                                
                                

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

export default Design;
