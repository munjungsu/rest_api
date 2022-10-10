import React from 'react';
import axios from 'axios';
const Post = () => {
    const [data, setData] = React.useState('');
    const [newData, setNewData] = React.useState({
        id : '',
        name : ''
    })
    
    const getData = async()=>{
        const result = await axios.get('http://localhost:3001/destinations')
        setData(result.data);
    }
    
    React.useEffect(()=>{
        
        if(newData.id && newData.name !== null){
            axios.post('http://localhost:3001/destinations', newData)
        }
         
    }, [newData])
    
    console.log(data);
    
    const idRef = React.useRef();
    const nameRef = React.useRef();
    
    const sendData = (e)=>{
        
        e.preventDefault();
        const idValue = idRef.current.value;
        const nameValue = nameRef.current.value;
       
       setNewData({
        id : Number(idValue),
        name : nameValue
       })
       
       console.log(newData);
       
       
    }
    return (
        <div>
            <form onSubmit={sendData}>
                <div>
                    <label htmlFor="id">id</label>
                    <input type="text" ref={idRef}/>
                </div>
                <div>
                    <label htmlFor="name">name</label>
                    <input type="text" ref={nameRef}/>
                </div>
                <button type="submit">post</button>
            </form>
        </div>
    );
};

export default Post;