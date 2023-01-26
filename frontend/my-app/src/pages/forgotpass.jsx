import React from 'react'
import '../App.css'
import Logo from '../assets/boginooLogo.png'
import {Link} from 'react-router-dom'
function forgotpass() {
  return (
    <>
    <div className='header'>
        <div className='topHeader'>
              <p className='topHeaderShit'>Хэрхэн ажилладаг вэ?</p> 
        </div>
        <div className='bottomHeader'>
            <Link to={"/"}>
                 <img src={Logo} alt="" className="logo"/>
            </Link>
            
        </div>
        <div>
            <p className='headerShit'>Нууц үг сэргээх</p>
            <p className='secondMainShit' style={{display:"flex", justifyContent:"center", fontSize:"18px", marginBottom:60, color:"black"}}>Бид таны цахим хаяг руу нууц үг<br /> &nbsp; &nbsp; сэргээх хаяг явуулах болно.</p>
        </div>
    </div>
    <div className='main'>
        <div className='input'>
            <p className='holder'>Цахим хаяг</p><input type="text" className='inputs' placeholder='name@mail.domain' style={{marginBottom:"10px"}}/>
        </div>
    </div>
    <div className='thridMain'>
        <div className='help'>
            <button className='button'>Илгээх</button>
        </div>
    </div>
    <div className='footer'>
        <div className='texts'>
                <p className='secondMainShit' style={{color:'black', marginTop:100}}>Made with ❤️ by Nest Academy</p>
                <p className='secondMainShit' style={{color:"gray", fontSize:"13px", marginLeft:"60px"}}>©boginoo.io 2023</p>
        </div>
    </div>
   
    
    </>
  )
}

export default forgotpass