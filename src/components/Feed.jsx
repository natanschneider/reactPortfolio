import axios from "axios";
import React, { useState, useEffect } from "react";
import FeedItem from "./feedItem";

export default function Feed() {
    const [feedApi, setFeedApi] = useState([]);

    useEffect(() => {
        fetchFeed();
    }, []);

    const fetchFeed = () => {
        try {
            const response = axios.get(import.meta.env.VITE_API_URL + '/feed');
            setFeedApi(response.data);
        } catch (error) {
            console.log(error.message);
        }
    };

    const feedComponenet = (
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {feedApi.map(post => (
                    <div key={post.id}>
                        <FeedItem
                            id={post.id}
                            title={post.title}
                            content={post.content}
                        />
                    </div>
                ))}
            </div>
        </div>
	)

	return(feedComponenet);
}