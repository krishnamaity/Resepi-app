import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdFoodBank } from 'react-icons/md';
import { IoMdMenu } from 'react-icons/io';
import "./Header.scss";
import { useSidebarContext } from '../../context/SidebarContext';


const Navbar = () => {
  const{openSidebar}=useSidebarContext();
  const[scrolled,setScrolled]=useState(false);

  const handelScroll=()=>{
    const offset=window.scrollY;
    if(offset > 60){
      setScrolled(true);
    }
    else {
      setScrolled(false)
    }
  }
  useEffect(()=>{
     window.addEventListener('scroll',handelScroll)
  })
 return(
  <>
    <nav className={`navbar bg-orange flex align-center ${scrolled ? 'scrolled': ""}`}>
      <div className='container w-100'>
        <div className='navbar-content text-while'>
          <div className='brand-and-toggler flex align-center justify-between'>
            <Link to="/" className='navbar-brand fw-3 fs-22 flex align-center'>

            <MdFoodBank/>
            <span className='navbar-brans-text fw-7'>FOOD_RECEPI</span>
            </Link>

            <div className='navbar-btns flex align-center'>
              <button type='button' className='navbar-show-btn text-white' onClick={()=>openSidebar( )}>
                <IoMdMenu size={27}/>
              </button>

            </div>

          </div>

        </div>
      </div>
    </nav>

  </>
 )
  
}

export default Navbar