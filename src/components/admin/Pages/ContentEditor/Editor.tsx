import TopBar from "./TopBar"
export default function Editor(){
    return (
        <div className="w-full mb-2 bg-white rounded-lg">
                    <TopBar />
                    <div className="px-4 py-2 bg-white rounded-lg">
                        <textarea id="editor" rows={8} className=" resize-none block w-full px-0 text-sm text-gray-800 bg-white border-0  focus:ring-0" placeholder="Write an article..." required></textarea>
                    </div>
                </div>
    )
}