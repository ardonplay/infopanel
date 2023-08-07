import Link from "next/link"
interface page {
    id: number
    title: string,
    type: string
}
export default function Pages({ pages }: { pages: page[] }) {

    return (
        <div className="flex flex-col w-1/2 mx-auto m-5">
            {
                pages.map((page) =>
                    <Link href={"/admin/pages/" + page.id} className="flex items-center space-x-4 bg-gray-100 rounded-xl p-2 m-1 transform transition duration-500 hover:scale-105 hover:bg-slate-300" key={page.id}>
                        <div className="ml-2 flex flex-row space-x-3">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                {page.id}
                            </p>
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                {page.title}
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                {page.type}
                            </p>
                        </div>
                    </Link>
                )
            }
        </div>


    )
}