// import { useEffect } from "react";
// import { useState } from "react";
import MealItem from './MealItem.jsx';
import useHttp from '../hooks/useHttp.js';

const requestConfig = {};

export default function Meals(){
    const {data: loadedMeals, isLoading, error} = useHttp('http://localhost:3000/meals', requestConfig, [])
    // const[loadedMeals, setLoadedMeals] = useState([]);
    // useEffect(() => {
    //     async function fetchMeals(){
    //         const response = await fetch('http://localhost:3000/meals');
    //         if(!response.ok){
    //             return <p>Something goes wrong...</p>
    //         }
    //         const mealsData = await response.json();
    //         setLoadedMeals(mealsData);
    //     };
    //     fetchMeals();
    // },[])
    if(isLoading){
        return(
            <p>Fetching meals...</p>
        )
    }
    return(
        <ul id="meals">
            {loadedMeals.map(meal => <MealItem meal={meal} key={meal.id}></MealItem>)}
        </ul>
    )
}