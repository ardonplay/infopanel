import SideBar from '@/components/admin/SideBar'

export default function LoginLayout({ children }: {
  children: React.ReactNode
}) {


  return (
    <section>
      <div className="flex flex-row">
        <SideBar />
        {children}
      </div>
    </section>
  )
}
