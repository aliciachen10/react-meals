import React from 'react';

import FoodItem from './FoodItem';
// import classes from './MoviesList.module.css';

const FoodList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.foodItem.map((foodItem) => (
        <FoodItem
          key={foodItem.id}
          title={foodItem.title}
          releaseDate={foodItem.releaseDate}
          openingText={foodItem.openingText}
        />
      ))}
    </ul>
  );
};

export default FoodList;
