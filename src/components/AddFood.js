import React, { useRef } from 'react';

import classes from './AddFood.module.css';

function AddFood(props) {
//   const titleRef = useRef('');
//   const openingTextRef = useRef('');
//   const releaseDateRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const food = {
      id: Math.random(),
      foodName: 'hardcoded_name',
      foodPrice: 10.99
    //   title: titleRef.current.value,
    //   openingText: openingTextRef.current.value,
    //   releaseDate: releaseDateRef.current.value,
    };

    props.onAddFood(food);
  }

  return (
    <form onSubmit={submitHandler}>
      {/* <div className={classes.control}>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='opening-text'>Opening Text</label>
        <textarea rows='5' id='opening-text' ref={openingTextRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor='date'>Release Date</label>
        <input type='text' id='date' ref={releaseDateRef} />
      </div> */}
      <button>Add Food</button>
    </form>
  );
}

export default AddFood;
