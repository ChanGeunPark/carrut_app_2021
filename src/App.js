import React from 'react';

function Food({name,picture}){
  return <div>
    <h1>I like {name}</h1>
    <p>{picture}</p>
  </div>
}
const foodIlike = [
  {
    name: 'kimchi',
    img: "img1"
  },
  {
    name: 'Samgyeopsal',
    img: "img2"
  },
  {
    name: 'Bibimbap',
    img: "img3"
  },
  {
    name: 'Doncasu',
    img: "img4"
  }

];

function App() {
  return (
    <div className="App">
      <h1>Hello!!</h1>
      {foodIlike.map(dish=>(
        <Food name={dish.name} picture={dish.img}/>
      ))}
    </div>
  );
}

export default App;
