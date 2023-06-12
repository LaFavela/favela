import React, {useState} from 'react';
import Login from '../components/login';
import { useSession } from 'next-auth/react';

export default function LoginButton(
    props: any ={transparent:false}
){    
    const [showLogin, setShowLogin] = useState(false);
    const handleOnClose = () => setShowLogin(false);
    
    let textColor = "text-white ";
    let bgColor = "bg-[#B17C3F] ";
    if (props.transparent) {
        textColor = "text-[#569DB3] ";
        bgColor = "bg-white ";
    }
    
    return (
        <div>
            <button 
                onClick={() => setShowLogin(true)}
                className={"w-[8.9375rem] h-[3.2rem] rounded-full font-medium text-[1.25rem] "+bgColor+textColor}>Login</button>
            <Login onClose={handleOnClose} visible={showLogin}></Login>
            
        </div>
    )
}