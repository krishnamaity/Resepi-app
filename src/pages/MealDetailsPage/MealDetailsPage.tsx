import React, { useEffect } from "react";
import "./MealDetailsPage.scss";
import { useParams } from "react-router-dom";
import { useMealContext } from "../../context/mealsContext";
import Loader from "../../components/Loader/Loader";
import MealSingle from "../../components/Meal/MealSingle";
import CategoryList from "../../components/Category/CategoryList";
import { startFetchSingleMeal } from "../../actions/mealsActions";

const MealDetailsPage = () => {
  const { id } = useParams();
  const {
    categories,
    dispatch,
    singleMeal,
    singleMealLoading,
    categoryLoading
  } = useMealContext();

  useEffect(() => {
    if (id) {
      startFetchSingleMeal(dispatch, id);
    }
  }, [id, dispatch]);

  let ingredientsArr: string[] = [];
  let measuresArr: string[] = [];

  if (singleMeal) {
    for (let prop in singleMeal) {
      if (prop.includes("strIngredient") && singleMeal[prop]) {
        ingredientsArr.push(singleMeal[prop]);
      }
      if (
        prop.includes("strMeasure") &&
        singleMeal[prop] &&
        singleMeal[prop].length > 1
      ) {
        measuresArr.push(singleMeal[prop]);
      }
    }
  }

  const mealData = {
    id: singleMeal?.idMeal,
    title: singleMeal?.strMeal,
    category: singleMeal?.strCategory,
    area: singleMeal?.strArea,
    thumbnail: singleMeal?.strMealThumb,
    instructions: singleMeal?.strInstructions,
    source: singleMeal?.strSource,
    tags: singleMeal?.strTags,
    youtube: singleMeal?.strYoutube,
    ingredients: ingredientsArr,
    measures: measuresArr
  };

  console.log("✅ singleMeal:", singleMeal);
  console.log("✅ ingredients:", ingredientsArr);
  console.log("✅ measures:", measuresArr);
  console.log("✅ mealData:", mealData);

  return (
    <main className="main-content bg-whitesmoke">
      {singleMealLoading ? <Loader /> : <MealSingle meal={mealData} />}
      {categoryLoading ? <Loader /> : <CategoryList categories={categories} />}
    </main>
  );
};

export default MealDetailsPage;
