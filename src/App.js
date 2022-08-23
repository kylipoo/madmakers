import { Component } from 'react';
import './App.css';

class App extends Component {
constructor() {
  super();

  this.state = {
  monsters: [
   {
    name: 'Matthew',
    id: '12345',
  }, 
   {
    name: 'Frank',
    id: '32432',
  }, 
   {
    name: 'Jacky',
    id: '33432',
  }, 
  {
    name: 'Andrei',
    id: '98698'
  }, 
]
  };
}

  render() {
  return (
    <div className="App">
     {
      this.state.monsters.map((monster) =>{
        return <div key = {monster.id}><h1>{monster.name}</h1></div>
      })
     }
    </div>
  );
}
}
export default App;
