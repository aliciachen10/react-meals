import React from 'react';

import FoodItem from './FoodItem';
import classes from './FoodList.module.css';

const FoodList = (props) => {
    // console.log("props for foodlist", props)
    // console.log(props.food.map((foodItem) => (foodItem.foodPrice)))
  return (
    <ul className={classes['food-list']}>
      {props.food.map((foodItem) => (
        <FoodItem
          key={foodItem.id}
          name={foodItem.foodName}
          price={foodItem.foodPrice}
        />
      ))}
    </ul>
  );
};

export default FoodList;
