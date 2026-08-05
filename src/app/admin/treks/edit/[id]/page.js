"use client";

import TrekForm from "@/components/admin/treks/Trekform";
import { useEffect, useState } from "react";


export default function EditTrekPage({ params }) {

    const [trek, setTrek] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTrek = async () => {
            try {
                const { id } = await params;

                const res = await fetch(
                    `/api/treks/${id}`
                );

                const data = await res.json();

                if(data.success){
                    setTrek(data.trek);
                }

            } catch(error){
                console.log(error);
            }
            finally{
                setLoading(false);
            }
        };

        fetchTrek();


    }, [params]);



    if(loading){

        return (
            <div className="p-10">
                Loading trek...
            </div>
        );

    }

    if(!trek){
        return (
            <div className="p-10">
                Trek not found
            </div>
        );
    }
    return (
        <TrekForm
            mode="edit"
            initialData={trek}
        />
    );

}