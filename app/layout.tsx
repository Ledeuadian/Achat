'use client'

import ToasterContext from './context/ToasterContext'
import AuthContext from './context/AuthContext'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveStatus from './components/ActiveStatus'
import { ThemeProvider } from 'next-themes'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider attribute="class">
        <AuthContext>
        <ToasterContext/>
        <ActiveStatus/>
        {children}
        </AuthContext>
      </ThemeProvider>
      </body>
    </html>
  )
}
