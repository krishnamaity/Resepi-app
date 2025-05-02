
import axios from "../api/axios";

import {FETCH_CATEGORY_BEGIN,
    FETCH_CATEGORY_SUCCESS,
    FETCH_CATEGORY_ERROR,
    FETCH_SINGLE_MEALS_BEGIN,
    FETCH_SINGLE_MEALS_ERROR,
    FETCH_SINGLE_MEALS_SUCCESS,
    FETCH_CATEGORY_MEALS_BEGIN,
    FETCH_CATEGORY_MEALS_SUCCESS,
    FETCH_CATEGORY_MEALS_ERROR,
    FETCH_MEALS_BEGIN,
    FETCH_MEALS_SUCCESS,
    FETCH_MEALS_ERROR
} from "./actions";

import { CATEGORIES_URL, MEAL_CATEGORIES_URL, SEARCH_URL } from "../utils/constant";
import {MEAL_SINGLE_URL} from "../utils/constant"

export const startFetchCategories = async (dispatch) => {
    console.log(CATEGORIES_URL)
    try {
        dispatch({type:FETCH_CATEGORY_BEGIN});
        const response=await axios.get(`${CATEGORIES_URL}`)
        console.log(response);
        dispatch({type:FETCH_CATEGORY_SUCCESS,payload:response.data.categories})
    } catch (error) {
     dispatch({type:FETCH_CATEGORY_ERROR,payload:error.message})   
    }
}

export const startFetchSingleMeal = async(dispatch, id) => {
    try{
        dispatch({ type: FETCH_SINGLE_MEALS_BEGIN});
        const response = await axios.get(`${MEAL_SINGLE_URL}${id}`);
        const data = response.data.meals[0];
        console.log(data)
        dispatch({type: FETCH_SINGLE_MEALS_SUCCESS, payload: data});
    } catch(error){
        dispatch({ type: FETCH_SINGLE_MEALS_ERROR, payload: error.message});
    }
}

 export const   startFetchMealsbyCategories =async (dispatch,category) => {
    try {
        dispatch({type:FETCH_CATEGORY_MEALS_BEGIN});
        const response=await axios.get(`${MEAL_CATEGORIES_URL}${category}`);
        dispatch({type:FETCH_CATEGORY_MEALS_SUCCESS,payload:response.data.meals})
    } catch (error) {
        dispatch({type:FETCH_CATEGORY_MEALS_ERROR,payload:error.message})
    }
 }

 export const startFetchMealsbySearch=async(dispatch,searchTerm)=>{
    try {
        dispatch({type:FETCH_MEALS_BEGIN});
        const response=await axios.get(`${SEARCH_URL}${searchTerm}`);
        console.log(response.data.meals)
        dispatch({type:FETCH_MEALS_SUCCESS,payload:response.data.meals})
    } catch (error) {
        dispatch({type:FETCH_MEALS_ERROR,payload:error.message})
    }

 }

 