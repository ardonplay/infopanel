import SideBar from '@/components/admin/SideBar'

export default function LoginLayout({ children }: {
  children: React.ReactNode
}) {
 

  return (
    <section>
      <SideBar/>
      <nav></nav>
      {children}
    </section>
  )
}
