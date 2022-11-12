import React, { useEffect, useState } from 'react';
import FoodList from './components/FoodList';
import AddFood from './components/AddFood';
import './App.css'

function App() {
  const [food, setFood] = useState([]);

  const fetchFoodHandler = () => { //later this turns into an async function... rn dummy data
    setFood([
      {
      id: '1',
      foodName: 'banana pie',
      foodPrice: 16.99
    },
    {
      id: '2',
      foodName: 'nigiri 3pcs',
      foodPrice: 20.99
    },
    {
      id: '3',
      foodName: 'pizza slice',
      foodPrice: 4.99
    }
    ])
  };

  const addFoodHandler = () => {
    fetchFoodHandler();
    // console.log("HERE IS THE FOOD LIST!", food)
  }

  useEffect(() => {
    fetchFoodHandler();
  }, [])

  return (
    <div>
      <AddFood onAddFood={addFoodHandler} />
      <FoodList food={food} />
    </div>
  );
}

export default App;
