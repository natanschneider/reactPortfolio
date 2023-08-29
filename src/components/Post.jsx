import axios from "axios";
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Post(){
    let {id} = useParams()
    const [Post, setPost] = useState([]);

    useEffect(() => {
        fetchPost();
    }, [])
    
    const fetchPost = async () => {
        try{
            const response = await axios.get(import.meta.env.VITE_API_URL + '/post', {
                params: {
                    id: id
                }
            });
            setPost(response.data);
        }catch(e){
            console.log('ERRO AXIOS POST: ' + e);
        }
    }

    const component = (
        <div className="w-full">
            <Header />
            <div className="mt-4">
                <h4 className="text-slate-700 dark:text-slate-100 font-bold">{Post.title}</h4>
                <br></br>
                <p>{Post.content}</p>
            </div>
            <div className="fixed bottom-0 right-[50%]">
                <Footer />
            </div>
        </div>
    );

    return component;
}