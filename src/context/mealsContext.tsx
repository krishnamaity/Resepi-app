
import React ,{ createContext,useContext,useReducer,useEffect, Children}from 'react';

import { mealReducer } from '../reducer/MealReducer';
import { startFetchCategories } from '../actions/mealsActions';
const initialState ={
    categories:[],
    categoryLoading:false,
    categoryError:false,
    categoryMeals:[],
    categoryMealsLoading:false,
    categoryMealsError:false,
    meals:[],
    mealloading:false,
    mealError:false
}

const MealContext=createContext({});

export const MealProvider = ({children})=>{
    const[state,dispatch]=useReducer(mealReducer,initialState);

    useEffect(()=>{
      startFetchCategories(dispatch)
    },[])

    return (
        <MealContext.Provider value={{
            ...state,
            dispatch,
            startFetchCategories
        }}>
            {children}
        </MealContext.Provider>
    )
}

export const useMealContext = ()=>{
    return useContext(MealContext);
}