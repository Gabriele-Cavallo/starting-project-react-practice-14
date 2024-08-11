import { useEffect } from "react";
import { useState } from "react";
import MealItem from './MealItem.jsx';

export default function Meals(){
    const[loadedMeals, setLoadedMeals] = useState([]);

    useEffect(() => {
        async function fetchMeals(){
            const response = await fetch('http://localhost:3000/meals');
            if(!response.ok){
                return <p>Something goes wrong...</p>
            }
            const mealsData = await response.json();
            setLoadedMeals(mealsData);
        };
        fetchMeals();
    },[])

    return(
        <ul id="meals">
            {loadedMeals.map(meal => <MealItem name={meal.name} id={meal.id} price={meal.price} description={meal.description} image={meal.image} key={meal.id}></MealItem>)}
        </ul>
    )
}