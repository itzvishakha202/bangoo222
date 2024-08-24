import ReactDOM from 'react';
import Navbar from './navbar';
import newImg from './contact.jpg'
function Contact(){
    
    return(<div>
    <Navbar/>
        <h1 className='header'>Contact</h1>
        <img src={newImg} className='newImg' />
        </div>
    )
}
export default Contact