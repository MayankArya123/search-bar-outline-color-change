import React,{useContext} from 'react';
import { appContext } from './App';

const Button = () => {

    const {color,setColor} = useContext(appContext)

    return (
        <div>
                <button   className={color ? 'red' : 'green'}  onClick={()=>setColor(!color)} > hello </button>

        </div>
    );
}

export default Button;
