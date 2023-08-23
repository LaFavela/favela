import React, {useState} from 'react';
import Login from '../components/login';
import { useSession } from 'next-auth/react';

export default function LoginButton(
    
){    
    const [showLogin, setShowLogin] = useState(false);
    const handleOnClose = () => setShowLogin(false);
    
    let textColor = "text-white ";
    let bgColor = "bg-[#B17C3F] ";
    
    return (
        <div>
            <button 
                onClick={() => setShowLogin(true)}
                className={"w-[6rem] h-[2.50rem] rounded-full font-medium text-[0.9rem] "+bgColor+textColor}>Login</button>
            <Login onClose={handleOnClose} visible={showLogin}></Login>
            
        </div>
    )
}