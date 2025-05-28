import './globals.css'
import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-yellow-50 text-gray-800">
        <Header />
        <main className="px-4 py-6 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
