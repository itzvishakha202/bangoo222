import React from 'react';
import Navbar from './navbar';
import newImg from './home.jpg'
import toast,{Toaster} from 'react-hot-toast';

function Home(){
    return(
    <div>
        <Navbar/>
        <h1 className='header'>Home</h1>
        <img src={newImg} className='newImg' />
        <button type='button' className='btn' onClick={()=>{
          toast.success("page reloading..")
        }}>
            know more
        </button>
        <Toaster position='top-right'/>
    </div>)
}
export default Home