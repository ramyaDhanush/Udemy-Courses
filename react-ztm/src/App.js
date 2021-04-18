import './App.css'
import {useState, useEffect} from 'react'
import SearchBox from './components/SearchBox/SearchBox.component.jsx'
import CardList from './components/CardList/CardList.component.jsx'
function App() {

  const [monster, setMonster] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  useEffect(() => {
    return () => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => setMonster(res))
      .catch(err => console.error(err));
    };
  },[monster]);
  
  const filteredMonster = monster.filter(m => m.name.toLowerCase().includes(searchfield.toLowerCase()));
  
  return (
    <div style={{textAlign: 'center'}}>
      <SearchBox searchPlaceholder="Search Monsters..." handleChange={e=> setSearchfield(e.target.value)}/>
      <CardList monster = {filteredMonster}/>
    </div>
  );
}

export default App;
