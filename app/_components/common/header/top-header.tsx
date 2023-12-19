import Image from 'next/image'

import StartButton from '../start-button'

export default function TopHeader() {
  return (
    <header className="fixed top-0 right-0 w-full py-2 px-4 flex justify-center lg:justify-between items-center bg-background/30 backdrop-blur-sm">
      <h1>
        <Image src="/images/logo.png" width={150} height={42} alt="共病日記" />
      </h1>
      <div className="hidden lg:block">
        <StartButton />
      </div>
    </header>
  )
}
