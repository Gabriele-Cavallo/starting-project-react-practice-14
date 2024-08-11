// import { useEffect } from "react";
// import { useState } from "react";
import MealItem from './MealItem.jsx';
import useHttp from '../hooks/useHttp.js';
import Error from './Error.jsx';

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
            <p className='center'>Fetching meals...</p>
        )
    }

    if(error){
        return <Error title="Failed to fetch meals" message={error}/>
    }
    
    return(
        <ul id="meals">
            {loadedMeals.map(meal => <MealItem meal={meal} key={meal.id}></MealItem>)}
        </ul>
    )
}