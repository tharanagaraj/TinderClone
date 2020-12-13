import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from "../../firebase";

const TinderCards = () => {
  //array and its setter
  const [people, setPeople] = useState([]);

  // Runs based on a condition
  useEffect(() => {
    const unsubscribe = database
      .collection("People")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );
    return () => {
      // detaches the listener in the browser
      unsubscribe();
    };
  }, []); //dependencies, when empty, makes the code run ONCE when the component loads, never again

  return (
    <div className="tinderCards__cardContainer">
      {people.map((person) => (
        <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe={["up", "down"]}
        >
          <div
            style={{ backgroundImage: `url(${person.url})` }}
            className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
};

export default TinderCards;
