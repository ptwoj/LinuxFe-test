import {useEffect, useState} from "react";
import axios from 'axios';
axios.defaults.baseURL =
    process.env.NODE_ENV === 'development' && 'http://localhost:8001'


const FormList = () => {
  const [demos, setDemos] = useState([]);

  useEffect(() => {
     axios.get('/api/v1/demo')
       .then(response => {
           console.log(response.data)
           setDemos(response.data);
       })
       .catch(error => {
           console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <div >
            <h2>Form List</h2>
            <ul>
                {demos.length != 0 ? demos.map(demo => (
                    <li key={demo.id}>
                        <strong>{demo.username}</strong>: {demo.text}
                        <p> {demo.name}</p>
                    </li>
                )) : <p>데이터 없음</p>}
            </ul>
        </div>
    );
};

export default FormList;