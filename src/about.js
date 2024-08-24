import ReactDOM from 'react';
import Navbar from './navbar';
import newImg from './about.jpg'
function About(){
   
    return(<div>
       <Navbar/>
        <h1 className='header'>About</h1>
        <img src={newImg} className='newImg' />
    </div>)
}
export default About