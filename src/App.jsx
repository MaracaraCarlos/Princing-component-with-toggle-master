
import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import { PlanContext } from './components/PlanContext';

function App() {
  
  const [anual, setAnual] = useState(true);
  
  return (
    <PlanContext.Provider value={{ anual, setAnual }}>
      <div className='app_container'>
        <Header />
        <div className="cards_container">
          <Card 
            costo={{
              year: "199.99",
              month: "19.99"
            }}
            tipo={{
              mode: "Basic",
              storage: "500 GB",
              users: "2",
              send: "3"
            }}
            />
          <Card 
            costo={{
              year: "249.99",
              month: "24.99"
            }}
            tipo={{
              mode: "Professional",
              storage: "1 TB",
              users: "5",
              send: "10"
            }}
          />
          <Card
            costo={{
              year: "399.99",
              month: "39.99"
            }}
            tipo={{
              mode: "Master",
              storage: "2 TB",
              users: "10",
              send: "20"
            }}
          />
        </div>
      </div>
    </PlanContext.Provider>
  )
}

export default App
