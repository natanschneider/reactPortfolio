import axios from "axios";
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

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
        <>
            
                <div>
                    <h1>{Post.title}</h1>

                    <p>{Post.content}</p>
                </div>
          
        </>
    );

    return component;
}