import {page} from "@/Interfaces/PageInterfaces"
import axios from "axios"
import PageEditor from "@/components/admin/Pages/PageEditor"

async function getData(id: string) {

    const res = await axios.get(`${process.env.URL}:${process.env.PORT}/api/page?id=${id}`)

    return res.data as page
}

export default async function PageEditorWrapper({ params }: { params: { id: string } }) {
    const page: page = await getData(params.id)
    return (<PageEditor page={page} />)
}