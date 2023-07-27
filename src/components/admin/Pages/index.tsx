interface page {
    id: number
    title: string,
    type: string
}
export default function Pages({pages}:{pages: page[]}) {

    return (

        <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            {
                pages.map((page) =>  <li className="pb-3 sm:pb-4" key={page.id}>
                <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                           {page.title}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                           {page.type}
                        </p>
                    </div>
                </div>
            </li>)
            }
           
        </ul>

    )
}