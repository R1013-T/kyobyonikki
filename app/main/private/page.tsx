import React from 'react'

import Greeting from '@/app/_components/main/greeting'
import DesktopHomeView from '@/app/_components/main/home-view/desktop'
import MobileHomeView from '@/app/_components/main/home-view/mobile'

export default function Home() {
  return (
    <div className="lg:h-full w-ful">
      <Greeting name="山田 太郎" />
      <MobileHomeView />
      <DesktopHomeView />
    </div>
  )
}
