import React ,{useState} from 'react'
import './navbar.css'
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/mainImage2.png'
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    /*
    @function that routes
    */
    const Menu=()=>(
        <>
           <p><a href="/">Home</a></p>
        </>
    )
    return (
        <div className='recipes__navbar'>
           <div className='recipes__navbar-links'>
               <div className="recipes__navbar-links-logo">
                   <img src={logo} alt="logo" />
               </div>
               <div className='recipes__navbar-links_container'>
                   <Menu/>
               </div>
           </div>
            <div className="recipes__navbar-menu">
                {
                    toggleMenu? 
                    <RiCloseLine color="#fff" size={27} onClick={()=>setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={()=>setToggleMenu(true)} />
                }
                   {
                    toggleMenu&&(
                        <div className="recipes__navbar-menu_container scale-up-center">
                            <div className="recipes__navbar-menu_container-links">
                               <Menu/>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar
