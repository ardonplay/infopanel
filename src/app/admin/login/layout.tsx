import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Infopanel',
  description: 'Written by ardonplay',
}

export default function LoginLayout({children}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className='p-0'>{children}</body>
    </html>
  )
}
