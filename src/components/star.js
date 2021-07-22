import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i} // returns true if more than selected start sate
          onSelect={() => setSelectedStars(i + 1)} // onclick hook a new state
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}


const Star = ({ selected = false, onSelect = f => f }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);


// In order to change the state of the StarRating component, we’ll need a function that can modify the value of selectedStars.The second item in the array that’s returned by the useState hook is a function that can be used to change the state value.Again, by destructuring this array, we can name that function whatever we like.In this case, we’re calling it setSelectedStars, because that’s what it does: it sets the value of selectedStars.

// The most important thing to remember about Hooks is that they can cause the component they’re hooked into to rerender.Every time we invoke the setSelectedStars function to change the value of selectedStars, the StarRating function component will be reinvoked by the hook, and it will render again, this time with a new value for selectedStars.This is why Hooks are such a killer feature.When data within the hook changes, they have the power to rerender the component they’re hooked into with new data.

// The StarRating component will be rerendered every time a user clicks a Star.When the user clicks the Star, the onSelect property of that star is invoked.When the onSelect property is invoked, we’ll invoke the setSelectedStars function and send it the number of the star that was just selected.We can use the i variable from the map function to help us calculate that number.When the map function renders the first Star, the value for i is 0. This means that we need to add 1 to this value to get the correct number of stars.