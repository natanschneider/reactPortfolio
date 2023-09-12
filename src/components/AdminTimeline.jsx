import React, { useEffect, useState } from "react";
import AdminSidebar from "./AdminSidebar";
import axios from "axios";

export default function AdminTimeline(){
    const [timeline, setTimeline] = useState([]);

    useEffect(()=>{
        getTimeline();
    }, []);

    const getTimeline = async () => {
        try{
            const result = await axios.get(import.meta.env.VITE_API_URL + '/timeline')
            setTimeline(result.data)
        }catch(e){
            console.error('Error:'+e.message)
        }
    }

    return(
        <>
            <AdminSidebar />
            <div className="w-full">
                <h1>Timeline</h1>
                <a className="bg-blue-700" href="/admin/timeline/create">Create</a>
                {timeline.map(row => (
                    <div key={row.id}>
                        <h1>{row.title}</h1>
                    </div>
                ))}
            </div>
        </>
    )
}