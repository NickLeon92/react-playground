import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import {Button, Form, FormSelect, FormLabel} from 'react-bootstrap'

function App() {

  const [companies, setCompanies] = useState(null)

  useEffect(() => {
    fetch(`https://sbm-hs-server.herokuapp.com/list-companies`)
    .then(res => res.json())
    .then(data => {
      setCompanies(data)
      console.log(data)
    })
  },[])
  return (
    <div className="App"style={{textAlign:'center'}}>
      <FormLabel for="company">Choose a company:</FormLabel>
      <FormSelect name="companies" id="companies" style={{width:'50%', textAlign:'center', margin:'auto'}}>
        {
          companies&&(
            companies.results.map((el) => {
              return <option>{el.properties.name}</option>
            })
          )
        }
        
      </FormSelect>
    </div>
  );
}

export default App;
