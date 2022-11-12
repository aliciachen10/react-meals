import React from 'react';

import classes from './FoodItem.module.css';

const FoodItem = (props) => {
    // console.log("each food item props", props.foodName, props.foodPrice)
  return (
    <li className={classes.food}>
      <h3>{props.name}</h3>
      <h3>{props.price}</h3>
      <button>add food</button>
    </li>
  );
};

export default FoodItem;
