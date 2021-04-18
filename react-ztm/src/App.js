import './App.css'
import {useState, useEffect} from 'react'
// import Card from './components/Card/Card.component.jsx'
import CardList from './components/CardList/CardList.component.jsx'
function App() {

  const [monster, setMonster] = useState([]);
  
  useEffect(() => {
    return () => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => setMonster(res))
      .catch(err => console.error(err));
    };
  },[monster]);
  
  return (
    <>
      <CardList monster = {monster}/>
    </>
  );
}

export default App;
