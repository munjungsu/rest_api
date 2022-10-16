import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getUser, setUser} from '../slices/UserSlice';

const UserPage = () => {
    const {name, id, category, data} = useSelector((state)=>state.user);
    const dispatch = useDispatch();
    const [item, setItem] = React.useState('');
    const inputValue = React.useRef();
    React.useEffect(()=>{
        
        dispatch(getUser());
        
        
    }, [])
    console.log(data);
    
    const onAdd = ()=>{

        dispatch(setUser({
            id : id+1,
            name : inputValue.current.value,
            category : {
                type : "servinggo",
                power : 8
            }
        }));
        inputValue.current.value = '';
        dispatch(getUser());
    }
    return (
        <div>
            <div>
                <input type="text" ref={inputValue}/>
                <button onClick={onAdd}>전송</button>
            </div>
            
            <div>
                {data && data.map((v, i)=>(
                    <ul key={v.id}>
                        <li>
                            <p>{v.name}</p>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default UserPage;