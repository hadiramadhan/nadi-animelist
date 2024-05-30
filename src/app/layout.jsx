import Navbar from '@/components/Navbar'
import '@/app/globals.css'
// import { Gabarito } from 'next/font/google'

// const gabarito = gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'Nadi Animelist',
  description: 'Wesbite Anime Nadi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` bg-color-dark`} suppressHydrationWarning={true}>
       <Navbar/>
        {children}</body>
    </html>
  )
}
