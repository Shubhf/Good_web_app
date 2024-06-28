// client/src/pages/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/data')
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Welcome to the God Web App</h1>
            <ul>
                {data.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </div>
    );
}

export default Home;

