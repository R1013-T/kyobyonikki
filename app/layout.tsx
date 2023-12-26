import './globals.css'

import type { Metadata } from 'next'

import { LINESeedJP } from './_lib/font'

export const metadata: Metadata = {
  title: {
    template: '%s | 共病日記',
    default: '共病日記',
  },
  description:
    '共病日記は、持病のある方々のためのオンラインコミュニティです。日々の健康状態を記録し、日記や悩みを共有することで、支援と理解のある環境を提供します。',
  keywords: [
    '共病日記',
    '健康管理アプリ',
    '持病サポート',
    '健康記録',
    '日々の健康',
  ],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://www.ryu-tech.tokyo/',
    title: '共病日記',
    description:
      '共病日記は、持病のある方々のためのオンラインコミュニティです。日々の健康状態を記録し、日記や悩みを共有することで、支援と理解のある環境を提供します。',
    images: [
      {
        url: 'https://raw.githubusercontent.com/R1013-T/kyobyonikki/main/public/images/logo.png',
        width: 1138,
        height: 320,
        alt: '共病日記',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${LINESeedJP.className} bg-background text-black-2 font-bold h-dvh overflow-hidden`}
      >
        {children}
      </body>
    </html>
  )
}
