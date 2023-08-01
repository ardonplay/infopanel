import Editor from "./Editor";


export default function ContentEditor() {
    return (
        <div className=" bg-slate-400 rounded-xl p-5">

            <form>
                <Editor />
                <div className="flex items-center justify-center">
                    <button type="button" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                        <p>add block</p>
                    </button>
                </div>
                <button type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Publish post
                </button>
            </form>
        </div>

    )
}