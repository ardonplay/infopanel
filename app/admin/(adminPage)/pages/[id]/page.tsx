import { block, isBlock } from "@/Interfaces/PageInterfaces"
import ContentEditor from "@/components/admin/Pages/ContentEditor"
import Header from "@/components/admin/Pages/Header"
import { Type } from "@prisma/client"
import axios from "axios"

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
    console.log(isBlock(page.content[0].content[0]))
    return (
        <div className="w-full">
            <Header />
            <div className="text-gray-900 text-xl m-5">
                <p>Title</p>
                <input type="text" className="block w-3/4 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div className="text-gray-900 text-xl m-5">
                <p>Content</p>
                <ContentEditor />
            </div>
        </div>)
}