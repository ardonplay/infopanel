"use client"

import axios from "axios"
import { useEffect } from "react"

export default function Page({ params }: { params: { id: string } }) {
    useEffect(() => {
        axios.get(`/api/page?id=${params.id}`)
    })
    return (
    <div>
        {params.id}
    </div>)
}