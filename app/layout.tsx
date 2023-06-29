import ToasterContext from './context/ToasterContext'
import AuthContext from './context/AuthContext'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveStatus from './components/ActiveStatus';
import ThemeProvider from "@/app/components/ThemeProvider";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "aChat",
  description: 'Chat and have fun'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider>
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
