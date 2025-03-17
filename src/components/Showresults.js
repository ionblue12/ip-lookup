import './Showresults.css';

const Showresults=({ipResult})=>{

    return(
        <div>
            <ul className='App-results'>
                <li>Request Status: <span className='Ip-list'>{ipResult.status}</span></li>
                <li>IP Address: <span className='Ip-list'>{ipResult.query}</span></li>
                <li>Country: <span className='Ip-list'>{ipResult.country}</span></li>
                <li>City: <span className='Ip-list'>{ipResult.city}</span></li>
                <li>Region Name: <span className='Ip-list'>{ipResult.regionName}</span></li>
                <li>Organization: <span className='Ip-list'>{ipResult.org}</span></li>
                <li>ISP: <span className='Ip-list'>{ipResult.isp}</span></li>
            </ul>
        </div>
    );

}

export default Showresults;