import './globals.css'
import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white m-0 p-0 overflow-x-hidden">
        <Header />
        <main className="m-0 p-0">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
