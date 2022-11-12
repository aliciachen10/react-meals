import React, { useEffect } from 'react';

function App() {
  const [food, setFood] = useState([]);

  const fetchFoodHandler = () => { //later this turns into an async function... rn dummy data
    setFood([
      {foodName: 'banana pie',
      foodPrice: 16.99
    },
    {
      foodName: 'nigiri 3pcs',
      foodPrice: 20.99
    },
    {
      foodName: 'pizza slice',
      foodPrice: 4.99
    }
    ])
  }

  useEffect(() => {
    fetchFoodHandler();
  }, [])

  return (
    <div>
      <h2>Let's get started!</h2>
      <FoodList food={food} />
    </div>
  );
}

export default App;
