import React, { useState } from 'react';
import "./Header.scss";
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useMealContext } from '../../context/mealsContext';
import { startFetchMealsbySearch } from '../../actions/mealsActions';


const SearchForm = () => {
 const navigate = useNavigate();
 const[searchTerm,setSearchTerm]=useState("");
 const[errorMsg,setErrorMsg]=useState("");
 const{dispatch,meals}=useMealContext();

 const handelSearchTerm=(e)=>{
  console.log(e.target.value);
  
  e.preventDefault();
  if((e.target.value.replace(/[^\w\s]/gi, "")).length !== 0){
    setSearchTerm(e.target.value);
    setErrorMsg("")
  }else{
    setErrorMsg("invalid search term....")
  }
 }
const handelSearchResult=(e)=>{
  e.preventDefault();
  navigate("/")
  startFetchMealsbySearch(dispatch,searchTerm)
   console.log(searchTerm)
}

  return (
    <>
    <form className='search-form flex align-center' onSubmit={(e)=>handelSearchResult(e)} >
      <input type='text' className='form-control-input text-dark-gray fs-15 ' placeholder='search recipes..' onChange={(e)=>handelSearchTerm(e)}/>
      <button type='submit' className='form-submit-btn text-white text-uppercase fs-14'>
      <BsSearch className='btn-icon' size={20}/>

      </button>
    </form>
    </>
  )
}

export default SearchForm