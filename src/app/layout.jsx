import Navbar from '@/components/Navbar'
import '@/app/globals.css'
import { Gabarito } from 'next/font/google'

const Gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'Nadi Animelist',
  description: 'Wesbite Anime Hadi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Gabarito.className} bg-color-dark`} suppressHydrationWarning={true}>
       <Navbar/>
        {children}</body>
    </html>
  )
}
