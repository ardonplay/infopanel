import { block, isBlock} from "@/Interfaces/PageInterfaces"
import { Type } from "@prisma/client"
import axios from "axios"
import { string } from "prop-types"

interface page {
    id: number,
    titlle: string,
    type: Type,
    content: block[]
}

async function getData(id: string) {

    const res = await axios.get(`${process.env.URL}:${process.env.PORT}/api/page?id=${id}`)

    return res.data as page
}

export default async function PageEditor({ params }: { params: { id: string } }) {
    let page: page = await getData(params.id)
    console.log( isBlock(page.content[0].content[0]))
    return (
        <div>
           
        </div>)
}