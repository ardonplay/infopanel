import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
export default function Home() {
  return (
    <>

      <div className="flex flex-row text-red-50 rounded-lg bg-gradient-to-b from-[#242424c5] to-[#2323233f]   shadow-[rgba(0,0,0,0.30)] shadow-xl w-full h-[calc(100vh-24px)] mx-auto">
        <Navbar />
        <Header />
      </div>

    </>
  )
}
