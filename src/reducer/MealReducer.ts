import {
  FETCH_CATEGORY_BEGIN,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_ERROR,
  FETCH_MEALS_BEGIN,
  FETCH_MEALS_SUCCESS,
  FETCH_MEALS_ERROR,
  FETCH_SINGLE_MEALS_SUCCESS,
  FETCH_SINGLE_MEALS_BEGIN,
  FETCH_SINGLE_MEALS_ERROR,
  FETCH_CATEGORY_MEALS_SUCCESS,
  FETCH_CATEGORY_MEALS_ERROR,
  FETCH_CATEGORY_MEALS_BEGIN
} from "../actions/actions";

// Define interfaces
interface MealbarState {
  categoryLoading: boolean;
  categoryError: boolean;
  categories: any[]; 
  mealsLoading: boolean;
  mealsError: boolean;
  meals: any[]; 
  singleMealLoading: boolean;
  singleMealError: boolean;
  singleMeal: any | null;
  categoryMealsLoading:boolean,
  categoryMealsError:boolean,
  categoryMeals:any[]
}

interface MealbarAction {
  type: string;
  payload?: any;
}

// Initial state
export const initialState: MealbarState = {
  categoryLoading: false,
  categoryError: false,
  categories: [],
  mealsLoading: false,
  mealsError: false,
  meals: [],
  singleMeal:null,
  singleMealError:false,
  singleMealLoading:false,
  categoryMealsLoading:false,
  categoryMealsError:false,
  categoryMeals:[]
};

// Reducer function
export const mealReducer = (state: MealbarState, action: MealbarAction): MealbarState => {
  switch (action.type) {
    case FETCH_CATEGORY_BEGIN:
      return {
        ...state,
        categoryLoading: true,
        categoryError: false
      };
    case FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        categoryLoading: false,
        categories: action.payload
      };
    case FETCH_CATEGORY_ERROR:
      return {
        ...state,
        categoryLoading: false,
        categoryError: true
      };
    case FETCH_MEALS_BEGIN:
      return {
        ...state,
        mealsLoading: true,
        mealsError: false
      };
    case FETCH_MEALS_SUCCESS:
      console.log(action.payload);
      
      return {
        ...state,
        mealsLoading: false,
        meals: action.payload
      };
    case FETCH_MEALS_ERROR:
      return {
        ...state,
        mealsLoading: false,
        mealsError: true
      };
      case FETCH_SINGLE_MEALS_BEGIN:
  return {
    ...state,
    singleMealLoading: true,
    singleMealError: false
  };
case FETCH_SINGLE_MEALS_SUCCESS:
  return {
    ...state,
    singleMealLoading: false,
    singleMeal: action.payload
  };
case FETCH_SINGLE_MEALS_ERROR:
  return {
    ...state,
    singleMealLoading: false,
    singleMealError: true
  };

      // case FETCH_SINGLE_MEALS_BEGIN:
      //   return{
      //     ...state,
      //     mealsLoading:true
      //   };
      // case FETCH_SINGLE_MEALS_SUCCESS:
      //   return{
      //     ...state,
      //     mealsLoading:false,
      //     meals:action.payload
      //   };
      // case FETCH_SINGLE_MEALS_ERROR:
      //   return{
      //     ...state,
      //     mealsLoading:false,
      //     mealsError:true
      //   };
        case FETCH_CATEGORY_MEALS_BEGIN:
          return{
           ...state,
           categoryMealsLoading:true
          };
        case FETCH_CATEGORY_MEALS_SUCCESS:
          return{
            ...state,
            categoryMealsLoading:false,
            categoryMeals:action.payload 
          };
        case FETCH_CATEGORY_MEALS_ERROR:
          return{
              ...state,
              categoryMealsLoading:false,
              categoryMealsError:true
          }
    default:
      return state;
  }
};
