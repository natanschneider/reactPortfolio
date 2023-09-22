import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PostsItem from "./PostsItem";

export default function Posts(){
    const [feed, setFeed] = useState([]);

    useEffect(() => {
        fetchFeed();
    }, [])
    
    const fetchFeed = async () => {
        try{
            const response = await axios.get(import.meta.env.VITE_API_URL + '/feed');
            setFeed(response.data);
        }catch(e){
            console.log(e.message);
        }
    }

    const component = (
        <div>
            <Header />
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
                {feed.map(row => (
                    <li 
                        className="mb-10 ml-4" 
                        key={row.id}
                    >
                        <PostsItem
                            id={row.id}
                            title={row.title}
                            content={row.content}
                            date={row.createAt}
                        />
                    </li>
                ))}
            </ol>
            <Footer />
        </div>
    );

    return(component);
}