import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [companies, setCompanies] = useState(null)

  useEffect(() => {
    fetch(`https://sbm-hs-server.herokuapp.com/list-companies`)
    .then(res => res.json())
    .then(data => {
      setCompanies(data)
      console.log(data)
    })
  })
  return (
    <div className="App">
      <label for="company">Choose a company:</label>
      <select name="companies" id="companies">
        {
          companies&&(
            companies.results.map((el) => {
              return <options>{el.properties.name}</options>
            })
          )
        }
        
      </select>
    </div>
  );
}

export default App;
