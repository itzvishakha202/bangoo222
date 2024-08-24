import React from 'react';
import Navbar from './navbar';
import newImg from './home.jpg'

function Home(){
    return(
    <div>
        <Navbar/>
        <h1 className='header'>Home</h1>
        <img src={newImg} className='newImg' />
    </div>)
}
export default Home