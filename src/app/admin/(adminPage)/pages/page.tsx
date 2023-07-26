"use client"
import PageItem from "@/components/admin/Pages"
import axios from "axios"
import { useState } from "react"
export default function Pages() {
    const [pages, setPages] = useState([])

    axios.get("/api/page").then((request) => {
       setPages(request.data)
    })

    return (
        <div className="flex-initial w-full">
           <PageItem pages={pages}/>
        </div>
    )
} 