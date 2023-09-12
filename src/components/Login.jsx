import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    useEffect(() => {
        checkLogin();
    }, []);
    
    const checkLogin = () => {
        if(localStorage.getItem('token')){
            window.location = "/admin/timeline";
        }
    }

    const handleLogin = async () => {
        try{
            const response = await axios.post(import.meta.env.VITE_API_URL+'/login', {
                email: email,
                psswd: password,
            });

            const token = response.data.email;

            localStorage.setItem("token", token);
            

            if(localStorage.getItem('token')){
                history('/admin/timeline')
            }

        }catch(error){
            document.getElementById('wrongPass').classList.remove('hidden')
            console.error('Falha no login! ', error.message);
        }
    }

    return(
        <div>
                <div className="h-max mx-auto flex flex-col items-center">
                    <h1 className="text-xl font-bold text-center pt-10">Sign in to your account</h1>
                    <div className="bg-white shadow-xl p-10 flex flex-col gap-4 text-sm">
                        <div id="wrongPass" className="hidden">
                            <p className="text-red-600">Usuario e/ou senha incorretos</p>
                        </div>
                        <div>
                            <label className="text-gray-600 font-bold inline-block pb-2" htmlFor="email">Email</label>
                            <input 
                                className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" 
                                type="email" 
                                name="email" 
                                placeholder="name@email.com" 
                                value={email}
                                required
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="text-gray-600 font-bold inline-block pb-2" htmlFor="password">Password</label>
                            <input 
                                className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" 
                                type="password" 
                                name="password" 
                                value={password}
                                placeholder="******"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <input 
                                className="bg-[#4F46E5] w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]" type="submit" 
                                value="Login" 
                                onClick={handleLogin}
                            />
                        </div>
                    </div>
                </div>
        </div>
    );    
}