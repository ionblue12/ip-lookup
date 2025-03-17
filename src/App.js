
import './App.css';
import Searchip from './components/Searchip';
import { useEffect, useState } from 'react';
import Showresults from './components/Showresults';

function App() {

  const [ipNumber, setIpNumber] = useState('');
  const [ipResults, setIpResults] = useState('');

  const findIP=async ()=>{
    const url=`http://ip-api.com/json/${ipNumber}?fields=status,message,country,region,regionName,city,zip,isp,org,query`;
    const response = await fetch(url);
    const responseJson = await response.json();
    setIpResults(responseJson);
  }
  console.log(ipResults);


  useEffect(()=>{findIP()}, [ipNumber]);

  const resetSearch=()=>{
    setIpResults('');
  }
  useEffect(()=>{resetSearch()},[]);
  return (
    <div className="App">
      <header className="App-header">
        <Searchip newIP={setIpNumber}/>
        <Showresults ipResult={ipResults}/>
        <button onClick={resetSearch}>Reset Search</button>
      </header>
    </div>
  );
}

export default App;
