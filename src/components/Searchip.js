import { useState } from "react";
import './Searchip.css';


const Searchip =({newIP})=>{
    const [searchIp, setSearchIp] = useState('')
    const handleChange=(e)=>{
        setSearchIp(e.target.value);
    }

    const handleClick=(e)=>{
        e.preventDefault();
        newIP(searchIp);
        setSearchIp('');
    }

    return(
    <div>
        <h1 className="App-name">IP Lookup</h1>
        <input
        type='text'
        value={searchIp}
        onChange={handleChange}
        ></input>
        <button onClick={handleClick}>Lookup IP</button>
    </div>

    );
}

export default Searchip;
