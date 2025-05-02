import React from 'react';
import "./Loader.scss";
import { loader_image } from '../../utils/images';


const Loader = () => {
  return (
  <>
  <div className='loader my-5'>
    <div className='container flex align-center justify-content '>
      <img src={loader_image} alt=''/>
      </div>
    </div>
  </>
  )
}

export default Loader