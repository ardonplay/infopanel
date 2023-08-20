import Header from "@/components/client/Header"
import ImageSlider from "@/components/client/ImageSlider"
import MainMenuButtons from "@/components/client/MainMenuButtons"
import Navbar from "@/components/client/Navbar"

export default function Home() {
  return (
    <div className="p-3">
      <div className="flex flex-row text-red-50 rounded-lg bg-gradient-to-b from-[#242424c5] to-[#2323233f]   shadow-[rgba(0,0,0,0.30)] shadow-xl w-full h-[calc(100vh-24px)] mx-auto">
        <Navbar />
        <div className="flex flex-col w-full items-center">
          <Header />
          <ImageSlider />
          <MainMenuButtons />
        </div>
      </div>
    </div>
  )
}
