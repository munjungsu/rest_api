import React from 'react';
import axios from 'axios';
const UseEffect = () => {
    const [data, setData] = React.useState('');
  // React.useEffect(()=>{
  //  axios.get('/data/destinations.json')
  //   .then((response) => {
  //     const result = response.data
  //     setData(result);
  //   })
  // }, [])
  React.useEffect(()=>{
    (async ()=>{
      const result = await axios.get('http://localhost:3001/destinations')
      setData(result.data);
    })();
    
  }, [])
  console.log(data);
    return (
        <div>
             {data && data.map((v, i)=>(
        <ul key={v.id}>
          <li>
            <p>{v.id}</p>
            <p>{v.name}</p>
          </li>
        </ul>
      ))}
        </div>
    );
};

export default UseEffect;