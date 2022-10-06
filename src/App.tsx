import {useState} from 'react'
import './App.css';

// Import Component 
import List from './com/List';
import AddList from './com/AddList';


export interface AppState {
  people : {
    name: string;
    age: number,
    img: string,
    discription?: string
  }[];
}

function App() {

  const [people, setPeople] = useState<AppState['people']>([
    {
      name: "Bill Gates",
      age: 66,
      img: "https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg",
      discription: "William Henry Gates III is an American business magnate, software developer",
    }
  ])

  return (
    <div className="App">

      <List people={people} />
      <AddList people={people} setPeople={setPeople} />

    </div>
  );
}

export default App;
