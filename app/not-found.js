export default function Custom404() {
  return (
    <div className="w-full h-[calc(100vh-24px)] flex items-center justify-center">
      <div className="flex flex-row space-x-3 items-center">
        <div className=" font-bold text-7xl">404</div>
        <div className=" font-extralight text-8xl">|</div>
        <div className=" font-mono text-5xl">page not found!</div>
      </div>
    </div>
  )
}