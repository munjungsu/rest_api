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
      const result = await axios.get('/data/destinations.json')
      setData(result.data);
    })();
    
  }, [])
  console.log(data);
    return (
        <div>
             {data && data.destinations.map((v, i)=>(
        <ul>
          <li key={v.id}>
            <p>{v.id}</p>
            <p>{v.name}</p>
          </li>
        </ul>
      ))}
        </div>
    );
};

export default UseEffect;