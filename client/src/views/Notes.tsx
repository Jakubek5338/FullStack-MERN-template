import React from 'react';
import Axios from 'axios';

function Notes() {
  const loginAction = () => {
    Axios.get('http://localhost:8080/api/user/login').then((response) => {
      console.log(response);
    });
  };
  return (
    <div className="App">
      <h1>Wynik: </h1>
      <button onClick={loginAction} type="submit">
        Click Me
      </button>
    </div>
  );
}

export default Notes;
