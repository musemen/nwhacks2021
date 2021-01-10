import React, { useState, useEffect } from 'react';

function Visitors() {

  const [currentuser, setCurrentUser] = useState(0);

  useEffect(() => {
    fetch('/visits-counter/').then(res => res.json()).then(data => {
      setCurrentUser(data.Visits);
    });
  }, []);

    return (
        <p>The unique number of visitors is {currentuser}.</p>
    );
  }
  
  export default Visitors;
  