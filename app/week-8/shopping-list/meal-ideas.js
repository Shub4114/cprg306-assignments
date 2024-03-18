import React, { useState, useEffect } from 'react';

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals;
};

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };

  useEffect(() => {
    loadMealIdeas();
    }, [ingredient]);



    return (
        <div>
          
          {meals && (
            <ul >
              {meals.map((meal) => (
                <li key={meal.idMeal} className="text-white p-4 bg-auto m-4 max-w-sm rounded-md bg-gray-600">{meal.strMeal}</li>
              ))}
             
            </ul>
            )}
            {!meals?.length && <p>No meal ideas found for {ingredient}</p>} 
            </div>
    );
    };

export default MealIdeas;