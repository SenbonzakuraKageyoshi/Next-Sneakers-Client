import type { Metadata } from 'next'

import { Inter } from 'next/font/google'

import Header from '@/components/Header/Header'

import '@/styles/index.scss';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Sneakers',
  description: 'Next Sneakers',
}

interface RootLayout{
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayout) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <div className="wrapper">
          <Header/>
          <div className="container">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
