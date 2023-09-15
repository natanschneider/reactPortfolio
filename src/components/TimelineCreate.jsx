import axios from "axios";
import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";

export default function TimelineCreate(){
    const [details, setDetails] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');

    const createTimeline = async () => {
        try{
            const response = await axios.post(import.meta.env.VITE_API_URL+'/admin/timeline', {
                title: title,
                year: year,
                start: start,
                end: end,
                details: details
            });

            console.log(response);
        }catch(e){
            console.error('Error: '+e.message)
        }
    }

    return(
        <>
            <AdminSidebar />
            <div>
                <h1 className="text-xl font-semibold py-4">Criar Item na Timeline</h1>
                <form className="flex flex-col space-y-8">
                    <div className="flex flex-col">
                        <label for="start" className="text-gray-600">Inicio</label>
                        <input name="start" type="date" required onChange={(e)=>setStart(e.target.value)} className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                    </div>
                    <div className="flex flex-col">
                        <label for="end" className="text-gray-600">Fim</label>
                        <input name="end" type="date" required onChange={(e)=>setEnd(e.target.value)} className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                    </div>
                    <div className="flex flex-col">
                        <label for="year" className="text-gray-600">Ano</label>
                        <input 
                            name="year" 
                            type="number"
                            min={1900}
                            max={2099} 
                            required 
                            onChange={(e)=>setYear(e.target.value)} 
                            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label for="title" className="text-gray-600">Titulo</label>
                        <input name="title" type="text" required onChange={(e)=>setTitle(e.target.value)} className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                    </div>
                    <div className="flex flex-col">
                        <label for="details" className="text-gray-600">Detalhes</label>
                        <input name="details" type="text" required onChange={(e)=>setDetails(e.target.value)} className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                    </div>
                    <button onClick={createTimeline} className="bg-slate-500 text-stone-200">Salvar</button>
                </form>
            </div>
        </>
    )
}